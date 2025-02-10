import axios from "axios";

export async function POST(req) {
  try {
    const { name, lastName, phone, email } = await req.json();

    // 1. Отправка данных в Telegram
    const telegramToken = `${process.env.TELEGRAM_TOKEN}`; // Получите токен через BotFather
    const chatId = `${process.env.CHAT_ID}` // Получите ID чата через Bot API
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
      from: `${process.env.GMAIL_USER}`, // Отправитель
      to: `${process.env.RECIPIENT_EMAIL}`, // Получатель
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
