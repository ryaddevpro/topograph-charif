import { NextResponse } from "next/server";

let nodemailer = require("nodemailer");

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const { nom, prenom, email, msg, filesAttachments } = body;
    if (!nom || !prenom || !email || !msg) {
      return NextResponse.json(
        { msg: "veuillez saisir tous les champs" },
        { status: 500 }
      );
    }
    if (filesAttachments.length > 3) {
      return NextResponse.json(
        { msg: "La limite des fichier est de 3 fichiers maximum" },
        { status: 500 }
      );
    }

    const filePath = filesAttachments.map((x, index) => {
      return { path: x };
    });

    const message = {
      from: "ryadbenmanser@gmail.com",
      to: "ryadbenmanser@gmail.com",
      subject: "Nouveau message du site",
      html: `
            <div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
                <h2 style="color: #333;">Nouveau message du site</h2>
                <p><strong>Nom:</strong> ${nom}</p>
                <p><strong>Prénom:</strong> ${prenom}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${msg}</p>
            </div>
        `,
      attachments: filePath,
    };
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_APP_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    try {
      // let info = await transporter.sendMail(message);

      return NextResponse.json(
        { msg: "Email envoyez avec success" },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { msg: "une Erreur est survenue, veuillez reessayer ulterieurement" },
        { status: 500 }
      );
    }
  } catch (e) {}
};
