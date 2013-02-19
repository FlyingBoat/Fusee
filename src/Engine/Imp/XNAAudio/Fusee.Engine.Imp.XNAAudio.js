/* Generated by JSIL v0.6.0 build 16283. See http://jsil.org/ for more information. */ 
var $asm00 = JSIL.DeclareAssembly("Examples.XNASoundTest, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("Examples");
JSIL.DeclareNamespace("Examples.XNASoundTest");
JSIL.MakeClass($asm02.TypeRef("Microsoft.Xna.Framework.Game"), "Examples.XNASoundTest.XNASoundTest", true, [], function ($) {
  var $thisType = $.publicInterface;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm02.Microsoft.Xna.Framework.Game)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm02.Microsoft.Xna.Framework.GraphicsDeviceManager)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm02.Microsoft.Xna.Framework.GameTime)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm04.Microsoft.Xna.Framework.Graphics.GraphicsDevice)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm01.Microsoft.Xna.Framework.Color)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm04.Microsoft.Xna.Framework.Graphics.SpriteBatch)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm01.Microsoft.Xna.Framework.Media.Song)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm01.Microsoft.Xna.Framework.Content.ContentManager)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm01.Microsoft.Xna.Framework.Media.MediaPlayer)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize(System.Array.Of($asm06.System.String))) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm06.System.IDisposable)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm01.Microsoft.Xna.Framework.Input.GamePad)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm01.Microsoft.Xna.Framework.PlayerIndex)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm01.Microsoft.Xna.Framework.Input.ButtonState)) ();
  };

  $.Method({Static:false, Public:true }, ".ctor", 
    $sig.make(0x5A, null, [], []), 
    function XNASoundTest__ctor () {
      $T00().prototype._ctor.call(this);
      this.graphics = new ($T01())(this);
      this.get_Content().set_RootDirectory("Content");
    }
  );

  $.Method({Static:false, Public:false}, "Draw", 
    $sig.make(0x5F, null, [$asm02.TypeRef("Microsoft.Xna.Framework.GameTime")], []), 
    function XNASoundTest_Draw (gameTime) {
      this.get_GraphicsDevice().Clear($T04().get_Black().MemberwiseClone());
      $T00().prototype.Draw.call(this, gameTime);
    }
  );

  $.Method({Static:false, Public:false}, "Initialize", 
    $sig.make(0x5B, null, [], []), 
    function XNASoundTest_Initialize () {
      $T00().prototype.Initialize.call(this);
    }
  );

  $.Method({Static:false, Public:false}, "LoadContent", 
    $sig.make(0x5C, null, [], []), 
    function XNASoundTest_LoadContent () {
      this.spriteBatch = new ($T05())(this.get_GraphicsDevice());
      var mysong = this.get_Content().Load$b1($T06())("Assets/tetris");
      $sig.get(0xA065, null, [$asm01.Microsoft.Xna.Framework.Media.Song], []).CallStatic($T08(), "Play", null, mysong);
    }
  );

  $.Method({Static:true , Public:false}, "Main", 
    $sig.make(0x60, null, [$jsilcore.TypeRef("System.Array", [$.String])], []), 
    function XNASoundTest_Main (args) {
      var game = new $thisType();
      try {
        game.Run();
      } finally {
        if (game !== null) {
          game.IDisposable_Dispose();
        }
      }
    }
  );

  $.Method({Static:false, Public:false}, "UnloadContent", 
    $sig.make(0x5D, null, [], []), 
    function XNASoundTest_UnloadContent () {
    }
  );

  $.Method({Static:false, Public:false}, "Update", 
    $sig.make(0x5E, null, [$asm02.TypeRef("Microsoft.Xna.Framework.GameTime")], []), 
    function XNASoundTest_Update (gameTime) {
      if ($T0B().GetState($T0C().One).get_Buttons().get_Back() === $T0D().Pressed) {
        this.Exit();
      }
      $T00().prototype.Update.call(this, gameTime);
    }
  );

  $.Field({Static:false, Public:false}, "graphics", $asm02.TypeRef("Microsoft.Xna.Framework.GraphicsDeviceManager")); 
  $.Field({Static:false, Public:false}, "spriteBatch", $asm04.TypeRef("Microsoft.Xna.Framework.Graphics.SpriteBatch")); 
});

