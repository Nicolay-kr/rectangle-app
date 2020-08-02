document.addEventListener('DOMContentLoaded', () => {
  var view = document.querySelector('.view');
  var rect = document.querySelector('.rect');
  var x = parseInt((getComputedStyle(rect).left));
  var y = parseInt((getComputedStyle(rect).top));
  var view_width= parseInt((getComputedStyle(view).width));
  var view_height = parseInt((getComputedStyle(view).height));
  var rect_width = parseInt((getComputedStyle(rect).width));
  var rect_height = parseInt((getComputedStyle(rect).height));

  var x1_plus = document.querySelector('#x1-plus');
  var x1_minus = document.querySelector('#x1-minus');
  var x1_value = document.querySelector('#x1');
 
  var y1_plus = document.querySelector('#y1-plus');
  var y1_minus = document.querySelector('#y1-minus');
  var y1_value = document.querySelector('#y1');
  
  var x2_plus = document.querySelector('#x2-plus');
  var x2_minus = document.querySelector('#x2-minus');
  var x2_value = document.querySelector('#x2');
  
  var y2_plus = document.querySelector('#y2-plus');
  var y2_minus = document.querySelector('#y2-minus');
  var y2_value = document.querySelector('#y1');
  
// ......x1,y1

  x1_plus.addEventListener('click', function(){
    if(rect_width > 10){
      x1_value.textContent = +x1_value.textContent + 10;
      x += 10 ;
      rect.style.left = x + 'px' ;
      rect_width -= 10 ;
      rect.style.width = rect_width + 'px' ;
    }
  })
  x1_minus.addEventListener('click', function(){
    if(x > 10){
      x1_value.textContent = x1_value.textContent - 10;
      x -= 10 ;
      rect.style.left = x + 'px' ;
      rect_width += 10 ;
      rect.style.width = rect_width + 'px' ;
  }
  })
  y1_plus.addEventListener('click', function(){
    if(rect_height > 10){
      y1_value.textContent = +y1_value.textContent + 10;
      y += 10 ;
      rect.style.top = y + 'px' ;
      rect_height -= 10 ;
      rect.style.height = rect_height + 'px' ;
    }
  })
  y1_minus.addEventListener('click', function(){
    if(y > 10){
      y1_value.textContent = y1_value.textContent - 10; 
      y -= 10 ;
      rect.style.top = y + 'px' ;
      rect_height += 10 ;
      rect.style.height = rect_height + 'px' ;
    }
  }) 

// ......x2,y2

  x2_plus.addEventListener('click', function(){
    if((x + rect_width) < view_width - 10){
      x2_value.textContent = +x2_value.textContent + 10;
      rect_width += 10 ;
      rect.style.width = rect_width + 'px' ;
    }
  })
  x2_minus.addEventListener('click', function(){
    if(rect_width > 10){
      x2_value.textContent = x2_value.textContent - 10;
      rect_width -= 10 ;
      rect.style.width = rect_width + 'px' ;
    }
  })
  y2_plus.addEventListener('click', function(){
    if((y + rect_height) < view_height - 10){
      y2_value.textContent = +y2_value.textContent + 10;
      rect_height += 10 ;
      rect.style.height = rect_height + 'px' ;
    }
  })
  y2_minus.addEventListener('click', function(){
    if (rect_height > 10){
      y2_value.textContent = y2_value.textContent - 10; 
      rect_height -= 10 ;
      rect.style.height = rect_height + 'px' ;
    }
  }) 

})