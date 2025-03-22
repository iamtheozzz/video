function downloadVideo() {
   
    const link = document.createElement('a');
    link.href = 'Interview.mov';  
    link.download = 'Interview.mov';
    
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
