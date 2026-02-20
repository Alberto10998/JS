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
        <div style="background-color: #0A0A0A; padding: 40px 10px; font-family: 'Helvetica', Arial, sans-serif; color: #FFFFFF; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #1C1C1C; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; overflow: hidden;">
            
            <div style="padding: 30px 20px; border-bottom: 2px solid #D4AF37;">
              <h1 style="color: #D4AF37; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; margin: 0;">J.S. Servicios Profesionales</h1>
              <p style="color: #B3B3B3; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin-top: 5px;">Excelencia y Confianza</p>
            </div>

            <div style="padding: 30px; text-align: left;">
              <h2 style="color: #FFFFFF; font-size: 18px; margin-bottom: 20px; border-left: 3px solid #D4AF37; padding-left: 15px;">Detalles de Contacto</h2>
              
              <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #D4AF37; font-weight: bold; width: 100px;">NOMBRE:</td>
                  <td style="padding: 10px 0; color: #FFFFFF;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #D4AF37; font-weight: bold;">EMPRESA:</td>
                  <td style="padding: 10px 0; color: #FFFFFF;">${company || 'No especificada'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #D4AF37; font-weight: bold;">TELÉFONO:</td>
                  <td style="padding: 10px 0; color: #FFFFFF;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #D4AF37; font-weight: bold;">CORREO:</td>
                  <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #FFFFFF;">${email}</a></td>
                </tr>
              </table>

              <div style="margin-top: 30px; padding: 20px; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px;">
                <p style="color: #D4AF37; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 10px;">Mensaje:</p>
                <p style="color: #B3B3B3; line-height: 1.6; margin: 0; font-size: 14px; font-style: italic;">"${message}"</p>
              </div>

              <div style="margin-top: 35px; text-align: center;">
                <a href="mailto:${email}" style="background-color: #D4AF37; color: #0A0A0A; padding: 15px 30px; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; border-radius: 4px; display: inline-block;">Responder Ahora</a>
              </div>
            </div>

            <div style="background-color: #000000; padding: 20px; text-align: center;">
              <p style="color: #666666; font-size: 9px; margin: 0; letter-spacing: 1px;">
                Centeno No. 1172 A, Praderas Ote, Saltillo, Coah.<br>
                JIMENEZSILLER.COM.MX
              </p>
            </div>
          </div>
        </div>
      `
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}