(function ($) {

  var my = {
    init: function () {
      this.bindClickEventOnSidenavToggle();
      this.bindClickEventOnSidenav();
      this.bindClickEventToCloseSidenav();
    },

    bindClickEventOnSidenavToggle: function () {
      $(document).on('click', '[data-toggle="sidenav"]', this.updateSidenav);
    },

    bindClickEventOnSidenav: function (event) {
      $(document).on('click', '.sidenav-active .region-sidebar-first, \
        .sidenav-active .region-sidebar-second', function (event) {
        event.stopPropagation();
      });
    },

    bindClickEventToCloseSidenav: function () {
      $(document).on('click', 'body.sidenav-active', function () {
        my.closeSidenav();
      });
    },

    openSidenav: function () {
      $('body').addClass('sidenav-active');

      if ($('.sidenav-overlay').length < 1) {
        $('body').append('<div class="sidenav-overlay"></div>');
      }
    },

    closeSidenav: function () {
      $('body').removeClass('sidenav-active');
    },

    updateSidenav: function () {
      if ($('body').hasClass('sidenav-active')) {
        my.closeSidenav();
      } else {
        my.openSidenav();
      }
    }
  };

  my.init();

}(jQuery));