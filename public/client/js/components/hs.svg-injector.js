(function(a){'use strict';a.HSCore.components.HSSVGIngector={_baseConfig:{},pageCollection:a(),init:function(b,c){if(this.collection=b&&a(b).length?a(b):a(),!!a(b).length)return this.config=c&&a.isPlainObject(c)?a.extend({},this._baseConfig,c):this._baseConfig,this.config.itemSelector=b,this.initSVGInjector(),this.pageCollection},initSVGInjector:function(){var b=this,c=b.pageCollection;this.collection.each(function(b,d){var e,f,g=a(d),h=JSON.parse(d.getAttribute("data-img-paths")),j=h?h.length:0,k=a(g.data("parent"));k.css("height",k.outerHeight()),SVGInjector(g,{each:function(c){if(0<j)for(b=0;b<j;b++)e=h[b].targetId,f=h[b].newPath,a(c).find(e).attr("xlink:href",f);k.removeClass("svg-preloader").css("height","")}}),c=c.add(g)})}}})(jQuery);