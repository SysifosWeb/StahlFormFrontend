import { d as defineEventHandler, u as useRuntimeConfig, r as readMultipartFormData, c as createError } from '../../nitro/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';

const contacts_post = defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig(event);
    const formData = await readMultipartFormData(event);
    if (!formData) {
      throw createError({ statusCode: 400, statusMessage: "No data provided" });
    }
    const fields = {};
    let fileAttachment = null;
    for (const field of formData) {
      if (field.name && field.filename) {
        fileAttachment = {
          filename: field.filename,
          content: field.data,
          contentType: field.type
        };
      } else if (field.name) {
        fields[field.name] = field.data.toString("utf-8");
      }
    }
    const { nombre, email, telefono, mensaje } = fields;
    if (!nombre || !email || !mensaje) {
      throw createError({ statusCode: 400, data: { errors: { general: ["Faltan campos requeridos (nombre, email, mensaje)."] } } });
    }
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: Number(config.smtpPort),
      secure: true,
      // true for 465, false for 587
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass
      }
    });
    const attachments = fileAttachment ? [fileAttachment] : [];
    const adminMailOptions = {
      from: `"StahlForm Web" <${config.smtpUser}>`,
      to: "contacto@sysifosweb.cl",
      // Correo destino de los mensajes
      replyTo: email,
      subject: `Nuevo Requerimiento T\xE9cnico de: ${nombre}`,
      html: `
        <div style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background-color: #003e49; padding: 30px; text-align: center;">
            <h2 style="color: #c8d400; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Nuevo Requerimiento</h2>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9; border: 1px solid #eaeef3;">
            <p><strong>Detalles del Contacto:</strong></p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; width: 35%;"><strong>Nombre:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}" style="color: #003e49;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Tel\xE9fono:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${telefono || "No proporcionado"}</td>
              </tr>
            </table>
            
            <p style="margin-top: 20px;"><strong>Especificaciones del Requerimiento:</strong></p>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #c8d400; margin-bottom: 20px; max-width: 100%; overflow-x: hidden;">
              <p style="margin: 0; white-space: pre-wrap; word-wrap: break-word; overflow-wrap: break-word; word-break: break-word;">${mensaje}</p>
            </div>
            
            ${fileAttachment ? `<p style="font-size: 14px; color: #888;">El usuario adjunt\xF3 un documento asociado al requerimiento.</p>` : ""}
          </div>
          <div style="background-color: #1a1a1a; color: #fff; text-align: center; padding: 20px; font-size: 12px;">
            <p style="margin: 0;">Sistema Automatizado StahlForm // SYS_2026</p>
          </div>
        </div>
      `,
      attachments
    };
    const clientMailOptions = {
      from: `"StahlForm Core Ingenier\xEDa" <${config.smtpUser}>`,
      to: email,
      subject: `Recepci\xF3n de su Requerimiento - StahlForm`,
      html: `
        <div style="font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background-color: #1a1a1a; padding: 40px 30px; text-align: center; border-bottom: 4px solid #c8d400;">
            <h1 style="color: #fff; margin: 0; font-size: 24px; text-transform: uppercase;">STAHLFORM</h1>
            <p style="color: #c8d400; margin: 10px 0 0 0; font-size: 12px; letter-spacing: 4px; text-transform: uppercase;">Core Ingenier\xEDa</p>
          </div>
          
          <div style="padding: 40px 30px; background-color: #ffffff; border: 1px solid #eaeef3; border-top: none;">
            <h2 style="color: #003e49; font-size: 20px; margin-top: 0;">Estimado(a) ${nombre},</h2>
            
            <p style="color: #4a4a4a; line-height: 1.6; font-size: 15px;">
              Hemos recibido exitosamente su requerimiento t\xE9cnico en nuestra plataforma. Nuestro equipo de ingenier\xEDa realizar\xE1 una evaluaci\xF3n preliminar de sus activos basados en lo ingresado.
            </p>
            
            <div style="background-color: #eaeef3; border-left: 4px solid #003e49; padding: 15px 20px; margin: 25px 0;">
               <p style="margin: 0; color: #003e49; font-weight: 600; font-size: 14px;">
                 \u23F1\uFE0F Tiempo estimado de Respuesta T\xE9cnica: <span style="color: #1a1a1a;">Menos de 24 horas.</span>
               </p>
            </div>

            <p style="color: #4a4a4a; line-height: 1.6; font-size: 15px;">
               Agradecemos la confianza en StahlForm. Un especialista se pondr\xE1 en contacto pronto de manera directa.
            </p>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eaeef3; font-size: 13px; color: #888;">
              <p style="margin: 5px 0; font-weight: 500; color: #003e49;">StahlForm - Ingenier\xEDa & Ventas</p>
              <p style="margin: 5px 0;">Email: contacto@stahlform.cl</p>
              <p style="margin: 5px 0;">Asistencia Cr\xEDtica: +56 2 2345 6789</p>
            </div>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
            <p style="color: #888; font-size: 10px; margin: 0; font-family: monospace; letter-spacing: 1px;">S-TLFRM // SYS_READY - ESTE ES UN MENSAJE AUTOM\xC1TICO</p>
          </div>
        </div>
      `
    };
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);
    return {
      success: true,
      message: "Mensaje enviado correctamente"
    };
  } catch (error) {
    console.error("Error enviando contacto:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error enviando correo",
      data: { errors: { general: [error.message || "Error interno del servidor."] } }
    });
  }
});

export { contacts_post as default };
//# sourceMappingURL=contacts.post.mjs.map
