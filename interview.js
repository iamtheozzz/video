function downloadVideo() {
   
    const link = document.createElement('a');
    link.href = 'https://github.com/iamtheozzz/video/releases/download/interview/interview.mov';
    link.download = 'interview.mov';
    

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

