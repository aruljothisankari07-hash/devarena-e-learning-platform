const PDFDocument = require("pdfkit");

const downloadCertificate = async (req, res) => {
  try {

    const { name, course } = req.query;

    const doc = new PDFDocument();

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${course}-Certificate.pdf`
    );

    doc.pipe(res);

    doc.fontSize(30)
      .text("🏆 DevArena Certificate", {
        align: "center",
      });

    doc.moveDown();

    doc.fontSize(18)
      .text("This Certificate is Awarded To", {
        align: "center",
      });

    doc.moveDown();

    doc.fontSize(28)
      .fillColor("blue")
      .text(name, {
        align: "center",
      });

    doc.moveDown();

    doc.fillColor("black");

    doc.fontSize(18)
      .text(
        `Successfully Completed ${course}`,
        {
          align: "center",
        }
      );

    doc.moveDown();

    doc.text(
      `Date : ${new Date().toLocaleDateString()}`,
      {
        align: "center",
      }
    );

    doc.end();

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  downloadCertificate,
};