function viewDataPoint(dataPoint, pg) {
  switch (pg) {
    case '1':
      showDoc('1');
      break;
    case '2':
      showDoc('2');
      break;
    case '3':
      showDoc('3');
      break;
    case '6':
      showDoc('6');
      break;
    case '13':
      showDoc('13');
      break;
    default:
    // code block
  }

  setTimeout(function () {
    var canvas = document.getElementById('theCanvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.2)';
    ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
    switch (dataPoint) {
      case 'cname':
        ctx.rect(10, 5, 65, 15);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'pname':
        ctx.rect(70, 25, 45, 15);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'inv_no':
        ctx.rect(325, 75, 50, 15);
        //document.getElementById("detailsBox9").style.display = "none";
        //document.getElementById("detailsBox6").style.display = "block";
        break;
      case 'date':
        ctx.rect(195, 40, 70, 20);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'doctor':
        ctx.rect(205, 75, 45, 15);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'amount':
        ctx.rect(120, 350, 45, 15);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'policy':
        ctx.rect(450, 240, 80, 30);
        //document.getElementById("detailsBox9").style.display = "none";
        //document.getElementById("detailsBox6").style.display = "block";
        break;
      case 'subscription':
        ctx.rect(450, 570, 260, 25);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'insuredAmt':
        ctx.rect(520, 915, 80, 25);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'list':
        ctx.rect(220, 900, 150, 30);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'k3':
        ctx.rect(125, 1490, 1100, 85);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'k4':
        ctx.rect(115, 820, 1100, 85);
        //document.getElementById("detailsBox9").style.display = "block";
        //document.getElementById("detailsBox6").style.display = "none";
        break;
      case 'k5':
        ctx.rect(115, 1400, 1100, 85);
        //document.getElementById("detailsBox9").style.display = "none";
        //document.getElementById("detailsBox6").style.display = "block";
        break;
      case 'k6':
        ctx.rect(115, 1480, 1100, 85);
        //document.getElementById("detailsBox9").style.display = "none";
        //document.getElementById("detailsBox6").style.display = "block";
        break;
      default:
      // code block
    }

    ctx.fill();
    ctx.stroke();
  }, 200);
}

function showDoc(pgNo) {
  var canvas = document.getElementById('theCanvas');
  var ctx = canvas.getContext('2d');

  var img = new Image();

  img.onload = function () {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
  };

  //img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130527/yellow-flower.jpg';

  switch (pgNo) {
    case '1':
      img.src = 'samples/medical_claim_chit.jpg';
      break;
    case '2':
      img.src = 'samples/taiwan_insurance_policy_2.jpg';
      break;
    case '3':
      img.src = 'samples/taiwan_clinic.jpg';
      break;
    case '6':
      img.src = 'samples/medical_claim_chit.jpg';
      break;
    case '13':
      img.src = 'samples/medical_claim_chit.jpg';
      break;
    default:
    // code block
  }
}
