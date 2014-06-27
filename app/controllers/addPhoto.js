
var bottomOverlay = Titanium.UI.createView({
	width: "100%",
	height: "20%",
	bottom: "0px",
	backgroundColor: 'blue',
});
 
var button = Titanium.UI.createButton({
	height:"90%",
	borderRadius:"20px",
	width:"50%",
	backgroundColor:"red",
	title : 'Take Picture'
});
 
var messageView = Titanium.UI.createView({
	height : 30,
	width : 250,
	visible : false
});
 
var indView = Titanium.UI.createView({
	height : 30,
	width : 250,
	backgroundColor : '#000',
	borderRadius : 10,
	opacity : 0.7
});
messageView.add(indView);
 
// message
var message = Titanium.UI.createLabel({
	text : 'Picture Taken',
	color : '#fff',
	font : {
		fontSize : 20,
		fontWeight : 'bold',
		fontFamily : 'Helvetica Neue'
	},
	width : 'auto',
	height : 'auto'
});
messageView.add(message);
 
var overlay = Titanium.UI.createView();
overlay.add(bottomOverlay);
overlay.add(button);
overlay.add(messageView);
 
button.addEventListener('click', function() {
	scanner.borderColor = 'blue';
	Ti.Media.takePicture();
	messageView.animate({
		visible : true
	});
	setTimeout(function() {
		scanner.borderColor = 'red';
		messageView.animate({
			visible : false
		});
	}, 500);
});
 
Titanium.Media.showCamera({
	saveToPhotoGallery : true,
	success : function(event) {
 
		// place our picture into our window
		var imageView = Ti.UI.createImageView({
			image : event.media,
			width : 320,
			height : 480
		});
		win.add(imageView);
 
		win.open();
		alert("picture was taken");
		//alert(event);
		// programatically hide the camera
		//Ti.Media.hideCamera();
	},
	cancel : function() {
	},
	error : function(error) {
		var a = Titanium.UI.createAlertDialog({
			title : 'Camera'
		});
		if (error.code == Titanium.Media.NO_CAMERA) {
			a.setMessage('Please run this test on device');
		} else {
			a.setMessage('Unexpected error: ' + error.code);
		}
		a.show();
	},
	overlay : overlay,
	showControls : false, // don't show system controls
	mediaTypes : Ti.Media.MEDIA_TYPE_PHOTO,
	autohide : false // tell the system not to auto-hide and we'll do it ourself
});
/*function openCamera() {
	
	var overlayImage = Titanium.UI.createImageView({
    	width: "100%",
   		height: "20%",
   		bottom: "0px",
    	backgroundColor: 'blue',
	});
	var btn = Titanium.UI.createButton({
		height:"90%",
		borderRadius:"20px",
		width:"50%",
		backgroundColor:"red"
	});
	var myOverlay = Titanium.UI.createView();
	overlayImage.add(btn);
	myOverlay.add(overlayImage);
	Titanium.Media.showCamera({
    	success: function(e) {},
    	error: function(e) {},
    	cancel: function(e) {},
    	overlay: myOverlay,
    	showControls: false,
    	saveToPhotoGallery: true,
    	allowEditing: true,
	});
	
	/*
	var overlay = Titanium.UI.createView({
		backgroundColor: 'blue',
		bottom:0,
		height: "20%",
		width: "100%",
		
	});

	overlay.add(btn);
    var cameraOptions = {
    */
        /*success : function(event) {
            var takenPicture = event.media;

            // set image on window
            $.photo.image = takenPicture;

        },
        cancel : function() {
        	Alloy.Globals.contentview.remove(Alloy.Globals.currentView);
			var	currentView = Alloy.createController("homeView").getView();
			Alloy.Globals.contentview.add(currentView);
        	Alloy.Globals.title.setText("Add a Moment");
            // cancel and close window
        },*/
        //overlay: overlay,
        /*error : function(error) {
            var a = Ti.UI.createAlertDialog({
                title : "Camera Error"
            });
            if (error.code == Ti.Media.NO_CAMERA) {
                a.setMessage("MISSING CAMERA");
            } else {
                a.setMessage('Unexpected error: ' + error.code);
            }
            a.show();
        },
        showControls: false
    };
    
    // display camera OR gallery
    if (Ti.Media.isCameraSupported) {
        Ti.Media.showCamera(cameraOptions);
    } else {
        Ti.Media.openPhotoGallery(cameraOptions);
    }

};

openCamera();


//HintText for the TextArea field.
if ($.photoDesc.value.length > 0) {
	$.textAreaHint.hide();
}

$.photoDesc.addEventListener('change', function(e){
	if (e.source.value.length > 0) {
		$.textAreaHint.hide();
	}
	else {
		$.textAreaHint.show();
	}
});

$.textAreaHint.addEventListener('click', function(e){
	$.photoDesc.focus();
});*/