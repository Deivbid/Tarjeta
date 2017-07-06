$(document).ready(function () {
    
    //OBJETO PARA EL BANNER
    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        posicion: 1
    };
    
    
    //OBJETO PARA LA INFO
    var info = {
        padre: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        posicion: 1
    };
    
    //POSICIONAR AMBOS AL PRINCIPIO NADA MAS RECARGAR LA PAG
    banner.padre.children('.slide').first().css({
        'left': 0
    });
    
    info.padre.children('.slide').first().css({
        'left': 0
    });
    
    
    //CALCULAR EL ALTO DEL BANNER (IMAGENES)
    var altoBanner = function () {
        var alto = banner.padre.children('.slide').outerHeight();
        
        banner.padre.css({
            'height': alto + 'px'
        });
    };
    
    
    //EFECTO BONITO AL RECARGAR PAG
    var altoInfo = function () {
        var alto = info.padre.children('.active').outerHeight();
        
        info.padre.animate({
            'height': alto + 'px'
        });
    };
    
    var altoContenedor = function () {
        var alto = $(window).height();
        
        if(alto <= $('#contenedor').outerHeight() + 200)
        {
            $('#contenedor').css({
                'height': ''
            })        
        }
        else
        {
            $('#contenedor').css({
                'height': alto + 'px' 
            })  
        }
    }
    
    
    //LLAMADO DE AMBAS FUNCIONES AL EMPEZAR
    altoBanner();
    altoInfo();
    altoContenedor();
    
    //PARA QUE SEA RESPONSIVE 
    $(window).resize(function () {
        altoBanner();
        altoInfo();
        altoContenedor();
    });
    
    $('#info').children('.slide').each(function(){
       $('#botones').append('<span>'); 
    });
    
    $('#botones').children('span').first().addClass('active');
    
// ------------------------------
    //BANNER
    
    function nextSlider()
    {
      if (banner.posicion < banner.numeroSlides)
      { 
        banner.padre.children().not('.active').css({
            'left': '100%'
        });    
            
        $('#banner .active').removeClass('active').next().addClass('active').animate({
            'left': '0'
        });
            
        $('#banner .active').prev().animate({
            'left': '-100%'
        });
        
        banner.posicion = banner.posicion +1;
      }
      else
      {
            $('#banner .active').animate({
                'left':'-100%'
            });
            
             banner.padre.children().not('.active').css({
            'left': '100%'
            });    
            
            
            $('#banner .active').removeClass('active');
            
            banner.padre.children('.slide').first().addClass('active').animate({'left': 0});
            
            banner.posicion = 1;
            
      }

       altoBanner(); // llamamos la función altoinfo(); 

        setTimeout( (e) =>{
            nextSlider(); // Espera un time de 3 segundos y vuelve a ejecutar la función      
         },10000 );

    }
    
    //BOTON SIGUIENTE
    $('#banner-next').on('click', function (e) {
        e.preventDefault();
        nextSlider();
        /*if (banner.posicion < banner.numeroSlides) {
        
        banner.padre.children().not('.active').css({
            'left': '100%'
        });    
            
        $('#banner .active').removeClass('active').next().addClass('active').animate({
            'left': '0'
        });
            
        $('#banner .active').prev().animate({
            'left': '-100%'
        });
        
        banner.posicion = banner.posicion +1;
        }
        else{
            
            $('#banner .active').animate({
                'left':'-100%'
            });
            
             banner.padre.children().not('.active').css({
            'left': '100%'
            });    
            
            
            $('#banner .active').removeClass('active');
            
            banner.padre.children('.slide').first().addClass('active').animate({'left': 0});
            
            banner.posicion = 1;
            
        }*/
        
    });
    
    //BOTON ANTERIOR
    $('#banner-prev').on('click', function (e) {
        e.preventDefault();
        
       
        if(banner.posicion > 1){
         
             banner.padre.children().not('.active').css({
            'left': '-100%'
        });
        
        $('#banner .active').animate({
            'left':'100%'
        });
            
        $('#banner .active').removeClass('active').prev().addClass('active').animate({
            'left':0
        });
        
        banner.posicion = banner.posicion - 1;
        }
        else{
            banner.padre.children().not('.active').css({
                'left':'-100%'
            });
            
            $('#banner .active').animate({
                'left':'100%'
            });
            
            $('#banner .active').removeClass('active');
            
            banner.padre.children().last().addClass('active').animate({
                'left':0
            });
            
            banner.posicion = banner.numeroSlides;
        }
        
    });
    
// ------------------------------
    //INFORMACION
    
    //BOTON SIGUIENTE
    $('#info-next').on('click', function (e) {
        e.preventDefault();
        
        if (info.posicion < info.numeroSlides) {
        
        info.padre.children().not('.active').css({
            'left': '100%'
        });    
            
        $('#info .active').removeClass('active').next().addClass('active').animate({
            'left': '0'
        });
            
        $('#info .active').prev().animate({
            'left': '-100%'
        });
        
        $('#botones').children('.active').removeClass('active').next().addClass('active');   
        
        info.posicion = info.posicion +1;
        }
        else{
            
            $('#info .active').animate({
                'left':'-100%'
            });
            
             info.padre.children().not('.active').css({
            'left': '100%'
            });    
            
            
            $('#info .active').removeClass('active');
            
            info.padre.children('.slide').first().addClass('active').animate({'left': 0});
            
            $('#botones').children('.active').removeClass('active');
            $('#botones').children('span').first().addClass('active');
            
            info.posicion = 1;
            
        }
        
        altoInfo();
    });
    
    //BOTON ANTERIOR
    $('#info-prev').on('click', function (e) {
        e.preventDefault();
        
       
        if(info.posicion > 1){
         
             info.padre.children().not('.active').css({
            'left': '-100%'
        });
        
        $('#info .active').animate({
            'left':'100%'
        });
            
        $('#info .active').removeClass('active').prev().addClass('active').animate({
            'left':0
        });
        
        $('#botones').children('.active').removeClass('active').prev().addClass('active');   
        
            
        info.posicion = info.posicion - 1;
        }
        else{
            info.padre.children().not('.active').css({
                'left':'-100%'
            });
            
            $('#info .active').animate({
                'left':'100%'
            });
            
            $('#info .active').removeClass('active');
            
            info.padre.children().last().addClass('active').animate({
                'left':0
            });
            
            $('#botones').children('.active').removeClass('active');
            $('#botones').children('span').last().addClass('active');
            
            info.posicion = info.numeroSlides;
        }
        altoInfo();
    });
});