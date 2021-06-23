import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

 function exportPDF() {

     html2canvas(document.querySelector("#resumeonly")).then(canvas => {
        document.body.appendChild(canvas);  // if you want see your screenshot in body.
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save("download.pdf"); 
    });

 }
 exportPDF();