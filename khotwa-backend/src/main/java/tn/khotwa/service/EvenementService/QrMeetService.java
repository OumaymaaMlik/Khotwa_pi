package tn.khotwa.service.EvenementService;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.Base64;

@Service
public class QrMeetService {

    // Génère un QR code PNG (base64) contenant l'URL du Meet.
    // L'entrepreneur scanne ce QR avec son téléphone → navigateur ouvre le Meet.
    public String generateQrForUrl(String url) {
        try {
            QRCodeWriter writer = new QRCodeWriter();
            // 300×300 px — lisible sur un écran de PC par un téléphone à 1 mètre
            BitMatrix matrix = writer.encode(url, BarcodeFormat.QR_CODE, 300, 300);
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            MatrixToImageWriter.writeToStream(matrix, "PNG", out);
            return "data:image/png;base64," + Base64.getEncoder().encodeToString(out.toByteArray());
        } catch (Exception e) {
            throw new RuntimeException("QR Meet generation failed: " + e.getMessage());
        }
    }
}