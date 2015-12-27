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
            <li ui-sref-active="active" ng-class="{active: $state.includes('post')}" animate="bounceInRight" delay="0.1s"><a ui-sref="posts" href="#Posts">Posts</a></li>
            <li ui-sref-active="active" animate="bounceInLeft" delay="0.2s"><a ui-sref="pages" href="#Pages">Pages</a></li>
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
  			<a href="<?php echo site_url(); ?>">
            <div class="charis">[p&#x280;&#x0251;g&#x02D1;ma&#x2D0;tiks]</div>
            <div class="special">pragmatics GmbH</div>
            <div class="special"> software engineering </div>
        </a>
  		</h1>
    </div>
	</header>
  <div class="container">
      <div class="row">
        <div class="col-xs-4">
          <div class="circle" animate="zoomIn" delay="0.1s">
              <div>css cirlce</div>
          </div>
        </div>
        <div class="col-xs-4">
          <div class="circle" animate="zoomIn" delay="0.2s">
              <div>css cirlce</div>
          </div>
        </div>
        <div class="col-xs-4">
          <div class="circle" animate="zoomIn" delay="0.3s">
              <div>css cirlce</div>
          </div>
        </div>
      </div>
  </div>

  <div class="container">
    <pre>
    <!-- Here's some values to keep an eye on in the sample in order to understand $state and $stateParams -->
    $state = {{$state.current.name}}
    $stateParams = {{$stateParams}}
    $state full url = {{ $state.$current.url.source }}
    <!-- $state.$current is not a public api, we are using it to
         display the full url for learning purposes-->
  </pre>
  </div>

	<div class="container" ui-view="posts" autoscroll>

  </div>

  <div class="container" ui-view="pages" autoscroll>

  </div>

<?php get_footer(); ?>
