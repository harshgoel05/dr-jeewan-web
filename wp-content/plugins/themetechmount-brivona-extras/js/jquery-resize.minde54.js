/*
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function(t,i,e){"$:nomunge";function n(){h=i[s](function(){r.each(function(){var i=t(this),e=i.width(),n=i.height(),h=t.data(this,o);(e!==h.w||n!==h.h)&&i.trigger(u,[h.w=e,h.h=n])}),n()},a[d])}var h,r=t([]),a=t.resize=t.extend(t.resize,{}),s="setTimeout",u="resize",o=u+"-special-event",d="delay",c="throttleWindow";a[d]=250,a[c]=!0,t.event.special[u]={setup:function(){if(!a[c]&&this[s])return!1;var i=t(this);r=r.add(i),t.data(this,o,{w:i.width(),h:i.height()}),1===r.length&&n()},teardown:function(){if(!a[c]&&this[s])return!1;var i=t(this);r=r.not(i),i.removeData(o),r.length||clearTimeout(h)},add:function(i){function n(i,n,r){var a=t(this),s=t.data(this,o);s!==e&&(s.w=n!==e?n:a.width(),s.h=r!==e?r:a.height()),h.apply(this,arguments)}if(!a[c]&&this[s])return!1;var h;return t.isFunction(i)?(h=i,n):(h=i.handler,void(i.handler=n))}}}(jQuery,this);