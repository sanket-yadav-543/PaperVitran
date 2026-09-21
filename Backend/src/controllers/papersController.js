const drive = require("../../config/googleDrive");

const getPaper = async (req, res) => {
  try {
    const { branch, semester } = req.params;
    const { type } = req.query; // midsem or endsem

    if (!type || !["midsem", "endsem"].includes(type.toLowerCase())) {
      return res.status(400).json({ error: "Invalid or missing 'type' query (midsem or endsem)" });
    }

    // 1️⃣ Get all branch folders
    const branchList = await drive.files.list({
      q: `'${process.env.MAIN_FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.folder'`,
      fields: "files(id, name)",
    });

    const branchFolder = branchList.data.files.find(
      (f) => f.name.toLowerCase() === branch.toLowerCase()
    );
    if (!branchFolder) return res.status(404).json({ error: "Branch not found" });

    // 2️⃣ Find midsem/endsem folder inside branch
    const typeList = await drive.files.list({
      q: `'${branchFolder.id}' in parents and mimeType='application/vnd.google-apps.folder'`,
      fields: "files(id, name)",
    });

    const typeFolder = typeList.data.files.find(
      (f) => f.name.toLowerCase() === type.toLowerCase()
    );
    if (!typeFolder) return res.status(404).json({ error: `${type} folder not found` });

    // 3️⃣ Get PDFs inside the type folder
    const pdfList = await drive.files.list({
      q: `'${typeFolder.id}' in parents and mimeType='application/pdf'`,
      fields: "files(id, name, webViewLink, webContentLink)",
    });

    let files = pdfList.data.files;

    // 4️⃣ Filter by semester prefix (e.g., "1-")
    files = files.filter((f) => f.name.startsWith(`${semester}-`));
    if (files.length === 0) return res.json({ message: "Coming soon..." });

    // 5️⃣ Sort numerically by semester number
    files.sort((a, b) => {
      const numA = parseInt(a.name.split("-")[0]);
      const numB = parseInt(b.name.split("-")[0]);
      return numA - numB;
    });

    // 6️⃣ Format response with subject and remarks (if present)
    const formatted = files.map((f) => {
      const nameWithoutExt = f.name.replace(".pdf", "");
      const parts = nameWithoutExt.split("-");

      const semNumber = parts[0];
      const subject = parts[1] || "Unknown";
      const remarks = parts[2] || null;

      return {
        semester: semNumber,
        subject,
        remarks,
        name: `${subject}${remarks ? " - " + remarks : ""}`,
        view: f.webViewLink,
        download: `https://drive.google.com/uc?id=${f.id}&export=download`,
      };
    });

    // 7️⃣ Send response
    res.json({
      branch,
      semester,
      type,
      count: formatted.length,
      files: formatted,
    });
  } catch (error) {
    console.error("Google Drive Error:", error);
    res.status(500).json({ error: "Error fetching from Google Drive",
      err:error
     });
  }
};

module.exports = getPaper;
