import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { name, email, phone, company, subject, message } = req.body;

    await resend.emails.send({
      from: 'Web JimenezSiller <web@jimenezsiller.com.mx>',
      to: ['direccion@jimenezsiller.com.mx'], //
      subject: `Nuevo Mensaje: ${subject}`,
      html: `
        <h2>Nuevo contacto desde JimenezSiller.com.mx</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}