import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { name, email, phone, company, subject, message } = req.body;

    await resend.emails.send({
      from: 'Web Jimenez Siller <web@jimenezsiller.com.mx>',
      to: ['direccion@jimenezsiller.com.mx'], //
      subject: `Nuevo Mensaje: ${subject}`,
      html: `
        <div style="font-family: 'Georgia', serif; font-size: 16px; color: #333333; line-height: 1.6; max-width: 600px;">
          
          <h2 style="color: #D4AF37; font-size: 22px; border-bottom: 2px solid #D4AF37; padding-bottom: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 30px;">
            J.S. Servicios Profesionales
          </h2>

          <p>Se ha recibido una nueva consulta desde el portal <strong>jimenezsiller.com.mx</strong> con los siguientes detalles:</p>

          <div style="margin: 25px 0;">
            <p style="margin: 8px 0;"><strong style="color: #D4AF37;">Nombre:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #D4AF37;">Empresa:</strong> ${company || 'No especificada'}</p>
            <p style="margin: 8px 0;"><strong style="color: #D4AF37;">Teléfono:</strong> ${phone}</p>
            <p style="margin: 8px 0;"><strong style="color: #D4AF37;">Correo electrónico:</strong> ${email}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #FDFDFD; border: 1px solid #EEEEEE;">
            <p style="color: #D4AF37; font-weight: bold; text-transform: uppercase; font-size: 12px; margin-bottom: 10px;">Mensaje recibido:</p>
            <p style="color: #555555; font-style: italic; margin: 0;">
              "${message}"
            </p>
          </div>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #EEEEEE; font-size: 12px; color: #777777;">
            <p style="margin: 0;">
              <strong>Atentamente,</strong><br>
              Sistema de Contacto Web | Jimenez Siller<br>
              Saltillo, Coahuila.
            </p>
          </div>

        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}