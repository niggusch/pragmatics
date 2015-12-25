<?php get_header(); ?>
  <header>
    <div id="navigation" class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header" animate="bounceInRight" >
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#" animate="bounceInLeft" delay="0.1s">
            <div class="charis">[p&#x280;&#x0251;g&#x02D1;ma&#x2D0;tiks]</div>
          </a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li ui-sref-active="active" animate="bounceInRight" delay="0.1s"><a ui-sref="m1" href="#m1">M1</a></li>
            <li ui-sref-active="active" animate="bounceInLeft" delay="0.2s"><a ui-sref="m2" href="#m2">M2</a></li>
            <li ui-sref-active="active" animate="bounceInRight" delay="0.3s"><a ui-sref="m3" href="#m3">M3</a></li>
            <li ui-sref-active="active" animate="bounceInLeft" delay="0.4s"><a ui-sref="m4" href="#m4">M4</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>

	<header>
    <div class="container">
  		<h1 animate="bounceInLeft" delay="0.4s">
  			<a href="<?php echo site_url(); ?>">Pragmatics Theme</a>
  		</h1>
    </div>
	</header>

	<div class="container" ng-view>
  </div>

<?php get_footer(); ?>
