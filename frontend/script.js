$('.content')
  .on("dragover", dragOver)
  .on("dragleave", dragOver)
  .on("drop", uploadFiles);

function dragOver(e){
	e.stopPropagation();
	e.preventDefault();
	if (e.type == "dragover") {
		$(e.target).css({
			"background-color": "#ECB0B0",
			"outline-offset": "-20px"
		});
	} else {
    	$(e.target).css({
			"background-color": "pink",
			"outline-offset": "-10px"
		});
    }
}

function uploadFiles(e) {
    e.stopPropagation();
    e.preventDefault();
    dragOver(e);
  
    e.dataTransfer = e.originalEvent.dataTransfer;
    var files = e.target.files || e.dataTransfer.files;
    if (files.length > 1) {
        alert('한파일만 업로드 가능합니다.');
        return;
    }
    if (files[0].type.match(/image.*/)) {
                $(e.target).css({
            "background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
            "outline": "none",
            "background-size": "100% 100%"
        });
    }else{
      alert('이미지가 아닙니다.');
      return;
    }
}

function printName()  {
  const name = document.getElementById('name').value;
  document.getElementById("result").innerText = name;
}