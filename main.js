document.addEventListener('DOMContentLoaded', () => {
  var view = document.querySelector('.view');
  var rect = document.querySelector('.rect');
  var rect_1 = document.querySelector('.rect_1');
  var rect_2 = document.querySelector('.rect_2');
  var x = parseInt((getComputedStyle(rect).left).replace('px',''));
  var y = parseInt((getComputedStyle(rect).top).replace('px',''));
  var view_width= parseInt((getComputedStyle(view).width).replace('px',''));
  var view_height = parseInt((getComputedStyle(view).height).replace('px',''));
  var rect_width = parseInt((getComputedStyle(rect).width).replace('px',''));
  var rect_height = parseInt((getComputedStyle(rect).height).replace('px',''));

  var x1_plus = document.querySelector('#x1-plus');
  var x1_minus = document.querySelector('#x1-minus');
  var x1_value = document.querySelector('#x1');
  var x1 = parseInt((getComputedStyle(rect_1).left).replace('px',''));
 

  var y1_plus = document.querySelector('#y1-plus');
  var y1_minus = document.querySelector('#y1-minus');
  var y1_value = document.querySelector('#y1');
  var y1 = parseInt((getComputedStyle(rect_1).top).replace('px',''));
  

  var x2_plus = document.querySelector('#x2-plus');
  var x2_minus = document.querySelector('#x2-minus');
  var x2_value = document.querySelector('#x2');
  var x2 = parseInt((getComputedStyle(rect_2).left).replace('px',''));
  

  var y2_plus = document.querySelector('#y2-plus');
  var y2_minus = document.querySelector('#y2-minus');
  var y2_value = document.querySelector('#y1');
  var y2 = parseInt((getComputedStyle(rect_2).top).replace('px',''));

  
// ......x1,y1

  x1_plus.addEventListener('click', function(){
    if(rect_width > 10){
      x1_value.textContent = (parseInt(x1_value.textContent) + 10).toString();
      x += 10 ;
      rect.style.left = x.toString() + 'px' ;
      rect_width -= 10 ;
      rect.style.width = rect_width.toString() + 'px' ;
    }
  })
  x1_minus.addEventListener('click', function(){
    if(x > 10){
      x1_value.textContent = (parseInt(x1_value.textContent) - 10).toString();
      x -= 10 ;
      rect.style.left = x.toString() + 'px' ;
      rect_width += 10 ;
      rect.style.width = rect_width.toString() + 'px' ;
  }
  })
  y1_plus.addEventListener('click', function(){
    if(rect_height > 10){
      y1_value.textContent = (parseInt(y1_value.textContent) + 10).toString();
      y += 10 ;
      rect.style.top = y.toString() + 'px' ;
      rect_height -= 10 ;
      rect.style.height = rect_height.toString() + 'px' ;
    }
  })
  y1_minus.addEventListener('click', function(){
    if(y > 10){
      y1_value.textContent = (parseInt(y1_value.textContent) - 10).toString(); 
      y -= 10 ;
      rect.style.top = y.toString() + 'px' ;
      rect_height += 10 ;
      rect.style.height = rect_height.toString() + 'px' ;
    }
  }) 

// ......x2,y2

  x2_plus.addEventListener('click', function(){
    if((x + rect_width) < view_width - 10){
      x2_value.textContent = (parseInt(x2_value.textContent) + 10).toString();
      rect_width += 10 ;
      rect.style.width = rect_width.toString() + 'px' ;
    }
  })
  x2_minus.addEventListener('click', function(){
    if(rect_width > 10){
      x2_value.textContent = (parseInt(x2_value.textContent) - 10).toString();
      rect_width -= 10 ;
      rect.style.width = rect_width.toString() + 'px' ;
    }
  })
  y2_plus.addEventListener('click', function(){
    if((y + rect_height) < view_height - 10){
      y2_value.textContent = (parseInt(y2_value.textContent) + 10).toString();
      rect_height += 10 ;
      rect.style.height = rect_height.toString() + 'px' ;
    }
  })
  y2_minus.addEventListener('click', function(){
    if (rect_height > 10){
      y2_value.textContent = (parseInt(y2_value.textContent) - 10).toString(); 
      rect_height -= 10 ;
      rect.style.height = rect_height.toString() + 'px' ;
    }
  }) 

})