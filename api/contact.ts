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
        <div style="background-color: #0A0A0A; padding: 50px 20px; font-family: 'Montserrat', sans-serif; color: #FFFFFF; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #1C1C1C; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.4);">
            
            <div style="padding: 40px 20px; border-bottom: 2px solid #D4AF37;">
              <h1 style="font-family: 'Playfair Display', serif; color: #D4AF37; font-size: 24px; letter-spacing: 3px; text-transform: uppercase; margin: 0; font-weight: bold;">J.S. Servicios Profesionales</h1>
              <p style="color: #B3B3B3; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; margin-top: 10px;">Excelencia y Confianza</p>
            </div>

            <div style="padding: 40px; text-align: left;">
              <h2 style="font-family: 'Playfair Display', serif; color: #FFFFFF; font-size: 20px; margin-bottom: 25px; font-weight: normal; border-left: 3px solid #D4AF37; padding-left: 15px;">Detalles de Contacto</h2>
              
              <table style="width: 100%; font-size: 14px; border-collapse: collapse; color: #FFFFFF;">
                <tr>
                  <td style="padding: 12px 0; color: #D4AF37; font-weight: bold; width: 110px; text-transform: uppercase; font-size: 12px;">Nombre:</td>
                  <td style="padding: 12px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #D4AF37; font-weight: bold; text-transform: uppercase; font-size: 12px;">Empresa:</td>
                  <td style="padding: 12px 0;">${company || 'No especificada'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #D4AF37; font-weight: bold; text-transform: uppercase; font-size: 12px;">Teléfono:</td>
                  <td style="padding: 12px 0;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #D4AF37; font-weight: bold; text-transform: uppercase; font-size: 12px;">Correo:</td>
                  <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #FFFFFF; text-decoration: underline;">${email}</a></td>
                </tr>
              </table>

              <div style="margin-top: 35px; padding: 25px; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(212, 175, 55, 0.1); border-radius: 8px;">
                <p style="color: #D4AF37; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 1px;">Mensaje:</p>
                <p style="color: #B3B3B3; line-height: 1.8; margin: 0; font-size: 15px; font-style: italic;">"${message}"</p>
              </div>

              <div style="margin-top: 40px; text-align: center;">
                <a href="mailto:${email}" style="background-color: #D4AF37; color: #0A0A0A; padding: 18px 35px; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; border-radius: 4px; display: inline-block; letter-spacing: 2px;">Responder ahora</a>
              </div>
            </div>

            <div style="background-color: #050505; padding: 25px; text-align: center; border-top: 1px solid rgba(212, 175, 55, 0.1);">
              <p style="color: #666666; font-size: 10px; margin: 0; line-height: 1.6; letter-spacing: 1px;">
                Centeno No. 1172 A, Praderas Ote, Saltillo, Coah. CP 25295<br>
                ESTE CORREO FUE GENERADO DESDE JIMENEZSILLER.COM.MX
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}