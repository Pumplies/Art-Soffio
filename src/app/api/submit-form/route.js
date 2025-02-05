import axios from "axios";

export async function POST(req) {
  try {
    const { name, lastName, phone, email } = await req.json();

    // 1. Отправка данных в Telegram
    const telegramToken = "7697839724:AAG2JGMeQEw8hmtDsdpwK0D1bLhKZ7EBvaE";
    const chatId = "-1002322209852"; // Получите ID чата через Bot API
    const message = `
      Новая заявка:
      Имя: ${name || "Не указано"}
      Фамилия: ${lastName || "Не указано"}
      Телефон: ${phone || "Не указано"}
      Email: ${email || "Не указано"}
    `;

    await axios.post(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        chat_id: chatId,
        text: message,
      }
    );

    // 2. Отправка данных на email (используем nodemailer)
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_PASS:", process.env.GMAIL_PASS);
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      service: "gmail", // Или другой почтовый сервис
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: "artsoffiozaavki@gmail.com",
      to: "maxmax20051120@gmail.com", // Получатель
      subject: "Новая заявка",
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Ошибка:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
