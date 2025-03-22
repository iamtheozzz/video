function downloadVideo() {
    
    const link = document.createElement('a');
    link.href = 'https://github.com/iamtheozzz/video/releases/download/untagged-2e869fe77fd4f3a43215/interview.mov';
    link.download = 'interview.mov';
    
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
