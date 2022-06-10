function FaqBox__init() {
    $('.faq_box > ul > li').click(function() {
      let $this = $(this);
      
      $this.siblings('.hover').find(' > .faq_ans').stop().slideUp(300); 
      $this.siblings('.hover').removeClass('hover');
      
      if ( $this.hasClass('hover') ) {
        $this.find(' > .faq_ans').stop().slideUp(900); 
        $this.removeClass('hover');
      }
      else {
        $this.find(' > .faq_ans').stop().slideDown(700); 
        $this.addClass('hover');
      }
    });
    
    $('.faq_ans').click(function() {
      return false;
    });
  }
  
  FaqBox__init();