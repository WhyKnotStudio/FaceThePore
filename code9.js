gdjs.TutorialScene_9501Code = {};
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1= [];
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2= [];
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects3= [];
gdjs.TutorialScene_9501Code.GDPoreShowAnimation_95UIObjects1= [];
gdjs.TutorialScene_9501Code.GDPoreShowAnimation_95UIObjects2= [];
gdjs.TutorialScene_9501Code.GDPoreShowAnimation_95UIObjects3= [];
gdjs.TutorialScene_9501Code.GDMusicIconObjects1= [];
gdjs.TutorialScene_9501Code.GDMusicIconObjects2= [];
gdjs.TutorialScene_9501Code.GDMusicIconObjects3= [];
gdjs.TutorialScene_9501Code.GDGameTitleObjects1= [];
gdjs.TutorialScene_9501Code.GDGameTitleObjects2= [];
gdjs.TutorialScene_9501Code.GDGameTitleObjects3= [];
gdjs.TutorialScene_9501Code.GDGameSubTitleObjects1= [];
gdjs.TutorialScene_9501Code.GDGameSubTitleObjects2= [];
gdjs.TutorialScene_9501Code.GDGameSubTitleObjects3= [];
gdjs.TutorialScene_9501Code.GDFaceShopIconObjects1= [];
gdjs.TutorialScene_9501Code.GDFaceShopIconObjects2= [];
gdjs.TutorialScene_9501Code.GDFaceShopIconObjects3= [];
gdjs.TutorialScene_9501Code.GDBeliefIconObjects1= [];
gdjs.TutorialScene_9501Code.GDBeliefIconObjects2= [];
gdjs.TutorialScene_9501Code.GDBeliefIconObjects3= [];
gdjs.TutorialScene_9501Code.GDText_95WelcomeObjects1= [];
gdjs.TutorialScene_9501Code.GDText_95WelcomeObjects2= [];
gdjs.TutorialScene_9501Code.GDText_95WelcomeObjects3= [];
gdjs.TutorialScene_9501Code.GDTutorialBG_95UIObjects1= [];
gdjs.TutorialScene_9501Code.GDTutorialBG_95UIObjects2= [];
gdjs.TutorialScene_9501Code.GDTutorialBG_95UIObjects3= [];
gdjs.TutorialScene_9501Code.GDHand_95UIObjects1= [];
gdjs.TutorialScene_9501Code.GDHand_95UIObjects2= [];
gdjs.TutorialScene_9501Code.GDHand_95UIObjects3= [];
gdjs.TutorialScene_9501Code.GDText_95Tutorial01Objects1= [];
gdjs.TutorialScene_9501Code.GDText_95Tutorial01Objects2= [];
gdjs.TutorialScene_9501Code.GDText_95Tutorial01Objects3= [];
gdjs.TutorialScene_9501Code.GDText_95Tutorial02Objects1= [];
gdjs.TutorialScene_9501Code.GDText_95Tutorial02Objects2= [];
gdjs.TutorialScene_9501Code.GDText_95Tutorial02Objects3= [];
gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1= [];
gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects2= [];
gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects3= [];
gdjs.TutorialScene_9501Code.GDText_95NextObjects1= [];
gdjs.TutorialScene_9501Code.GDText_95NextObjects2= [];
gdjs.TutorialScene_9501Code.GDText_95NextObjects3= [];
gdjs.TutorialScene_9501Code.GDMoleAnimation_95UIObjects1= [];
gdjs.TutorialScene_9501Code.GDMoleAnimation_95UIObjects2= [];
gdjs.TutorialScene_9501Code.GDMoleAnimation_95UIObjects3= [];
gdjs.TutorialScene_9501Code.GDCrossIconObjects1= [];
gdjs.TutorialScene_9501Code.GDCrossIconObjects2= [];
gdjs.TutorialScene_9501Code.GDCrossIconObjects3= [];
gdjs.TutorialScene_9501Code.GDFlowerBGObjects1= [];
gdjs.TutorialScene_9501Code.GDFlowerBGObjects2= [];
gdjs.TutorialScene_9501Code.GDFlowerBGObjects3= [];

gdjs.TutorialScene_9501Code.conditionTrue_0 = {val:false};
gdjs.TutorialScene_9501Code.condition0IsTrue_0 = {val:false};
gdjs.TutorialScene_9501Code.condition1IsTrue_0 = {val:false};
gdjs.TutorialScene_9501Code.condition2IsTrue_0 = {val:false};
gdjs.TutorialScene_9501Code.condition3IsTrue_0 = {val:false};
gdjs.TutorialScene_9501Code.conditionTrue_1 = {val:false};
gdjs.TutorialScene_9501Code.condition0IsTrue_1 = {val:false};
gdjs.TutorialScene_9501Code.condition1IsTrue_1 = {val:false};
gdjs.TutorialScene_9501Code.condition2IsTrue_1 = {val:false};
gdjs.TutorialScene_9501Code.condition3IsTrue_1 = {val:false};


gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDButtonNext_9595BGObjects1Objects = Hashtable.newFrom({"ButtonNext_BG": gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1});
gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDButtonNext_9595BGObjects1Objects = Hashtable.newFrom({"ButtonNext_BG": gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1});
gdjs.TutorialScene_9501Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1 */

gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDButtonNext_9595BGObjects1Objects, runtimeScene, true, false);
}if (gdjs.TutorialScene_9501Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TutorialScene_02", false);
}}

}


};gdjs.TutorialScene_9501Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PoreShowAnimation"), gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2);

gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2.length;i<l;++i) {
    if ( gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[i].isCurrentAnimationName("PoreShow") ) {
        gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = true;
        gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[k] = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[i];
        ++k;
    }
}
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2.length = k;}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2.length;i<l;++i) {
    if ( gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[i].hasAnimationEnded() ) {
        gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = true;
        gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[k] = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[i];
        ++k;
    }
}
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2.length = k;}if ( gdjs.TutorialScene_9501Code.condition1IsTrue_0.val ) {
{
{gdjs.TutorialScene_9501Code.conditionTrue_1 = gdjs.TutorialScene_9501Code.condition2IsTrue_0;
gdjs.TutorialScene_9501Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16715660);
}
}}
}
if (gdjs.TutorialScene_9501Code.condition2IsTrue_0.val) {
/* Reuse gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2 */
{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[i].resetTimer("BlinkTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PoreShowAnimation"), gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2);

gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2.length;i<l;++i) {
    if ( gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[i].getTimerElapsedTimeInSecondsOrNaN("BlinkTimer") > 2 ) {
        gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = true;
        gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[k] = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[i];
        ++k;
    }
}
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2.length = k;}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
{gdjs.TutorialScene_9501Code.conditionTrue_1 = gdjs.TutorialScene_9501Code.condition1IsTrue_0;
gdjs.TutorialScene_9501Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16716388);
}
}}
if (gdjs.TutorialScene_9501Code.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2 */
{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2[i].setAnimationName("Blink");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PoreShowAnimation"), gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1);

gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1.length;i<l;++i) {
    if ( gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1[i].getTimerElapsedTimeInSecondsOrNaN("BlinkTimer") > 2.1 ) {
        gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = true;
        gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1[k] = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1[i];
        ++k;
    }
}
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1.length = k;}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1.length;i<l;++i) {
    if ( gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1[i].isCurrentAnimationName("Blink") ) {
        gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = true;
        gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1[k] = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1[i];
        ++k;
    }
}
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1.length = k;}if ( gdjs.TutorialScene_9501Code.condition1IsTrue_0.val ) {
{
{gdjs.TutorialScene_9501Code.conditionTrue_1 = gdjs.TutorialScene_9501Code.condition2IsTrue_0;
gdjs.TutorialScene_9501Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16717692);
}
}}
}
if (gdjs.TutorialScene_9501Code.condition2IsTrue_0.val) {
/* Reuse gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1 */
{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1[i].resetTimer("BlinkTimer");
}
}}

}


};gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDMusicIconObjects1Objects = Hashtable.newFrom({"MusicIcon": gdjs.TutorialScene_9501Code.GDMusicIconObjects1});
gdjs.TutorialScene_9501Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TutorialScene_9501Code.GDMusicIconObjects1, gdjs.TutorialScene_9501Code.GDMusicIconObjects2);


gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialScene_9501Code.GDMusicIconObjects2.length;i<l;++i) {
    if ( gdjs.TutorialScene_9501Code.GDMusicIconObjects2[i].getTimerElapsedTimeInSecondsOrNaN("AudioTimer") > 0.2 ) {
        gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = true;
        gdjs.TutorialScene_9501Code.GDMusicIconObjects2[k] = gdjs.TutorialScene_9501Code.GDMusicIconObjects2[i];
        ++k;
    }
}
gdjs.TutorialScene_9501Code.GDMusicIconObjects2.length = k;}}
if (gdjs.TutorialScene_9501Code.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialScene_9501Code.GDMusicIconObjects2 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDMusicIconObjects2.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDMusicIconObjects2[i].setAnimationName("Mute");
}
}{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDMusicIconObjects2.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDMusicIconObjects2[i].resetTimer("AudioTimer");
}
}}

}


{

/* Reuse gdjs.TutorialScene_9501Code.GDMusicIconObjects1 */

gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialScene_9501Code.GDMusicIconObjects1.length;i<l;++i) {
    if ( gdjs.TutorialScene_9501Code.GDMusicIconObjects1[i].getTimerElapsedTimeInSecondsOrNaN("AudioTimer") > 0.2 ) {
        gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = true;
        gdjs.TutorialScene_9501Code.GDMusicIconObjects1[k] = gdjs.TutorialScene_9501Code.GDMusicIconObjects1[i];
        ++k;
    }
}
gdjs.TutorialScene_9501Code.GDMusicIconObjects1.length = k;}}
if (gdjs.TutorialScene_9501Code.condition1IsTrue_0.val) {
/* Reuse gdjs.TutorialScene_9501Code.GDMusicIconObjects1 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDMusicIconObjects1.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDMusicIconObjects1[i].setAnimationName("Unmute");
}
}{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDMusicIconObjects1.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDMusicIconObjects1[i].resetTimer("AudioTimer");
}
}}

}


};gdjs.TutorialScene_9501Code.eventsList3 = function(runtimeScene) {

{


gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}
if (gdjs.TutorialScene_9501Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MusicIcon"), gdjs.TutorialScene_9501Code.GDMusicIconObjects2);
{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDMusicIconObjects2.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDMusicIconObjects2[i].setAnimationName("Mute");
}
}{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDMusicIconObjects2.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDMusicIconObjects2[i].resetTimer("AudioTimer");
}
}}

}


{


gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}}
if (gdjs.TutorialScene_9501Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MusicIcon"), gdjs.TutorialScene_9501Code.GDMusicIconObjects2);
{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDMusicIconObjects2.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDMusicIconObjects2[i].setAnimationName("Unmute");
}
}{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDMusicIconObjects2.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDMusicIconObjects2[i].resetTimer("AudioTimer");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicIcon"), gdjs.TutorialScene_9501Code.GDMusicIconObjects1);

gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition2IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDMusicIconObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TutorialScene_9501Code.condition1IsTrue_0.val ) {
{
{gdjs.TutorialScene_9501Code.conditionTrue_1 = gdjs.TutorialScene_9501Code.condition2IsTrue_0;
gdjs.TutorialScene_9501Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16721076);
}
}}
}
if (gdjs.TutorialScene_9501Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.TutorialScene_9501Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDBeliefIconObjects2Objects = Hashtable.newFrom({"BeliefIcon": gdjs.TutorialScene_9501Code.GDBeliefIconObjects2});
gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDFaceShopIconObjects1Objects = Hashtable.newFrom({"FaceShopIcon": gdjs.TutorialScene_9501Code.GDFaceShopIconObjects1});
gdjs.TutorialScene_9501Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BeliefIcon"), gdjs.TutorialScene_9501Code.GDBeliefIconObjects2);

gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition2IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDBeliefIconObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TutorialScene_9501Code.condition1IsTrue_0.val ) {
{
{gdjs.TutorialScene_9501Code.conditionTrue_1 = gdjs.TutorialScene_9501Code.condition2IsTrue_0;
gdjs.TutorialScene_9501Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16724428);
}
}}
}
if (gdjs.TutorialScene_9501Code.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.thefaceshop.com.my/about-belif", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FaceShopIcon"), gdjs.TutorialScene_9501Code.GDFaceShopIconObjects1);

gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition2IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDFaceShopIconObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TutorialScene_9501Code.condition1IsTrue_0.val ) {
{
{gdjs.TutorialScene_9501Code.conditionTrue_1 = gdjs.TutorialScene_9501Code.condition2IsTrue_0;
gdjs.TutorialScene_9501Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16726164);
}
}}
}
if (gdjs.TutorialScene_9501Code.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.thefaceshop.com.my/thefaceshop", runtimeScene);
}}

}


};gdjs.TutorialScene_9501Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonNext_BG"), gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1);

gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition2IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialScene_9501Code.mapOfGDgdjs_46TutorialScene_959501Code_46GDButtonNext_9595BGObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TutorialScene_9501Code.condition1IsTrue_0.val ) {
{
{gdjs.TutorialScene_9501Code.conditionTrue_1 = gdjs.TutorialScene_9501Code.condition2IsTrue_0;
gdjs.TutorialScene_9501Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16710972);
}
}}
}
if (gdjs.TutorialScene_9501Code.condition2IsTrue_0.val) {
/* Reuse gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1 */
{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1[i].setColor("143;143;143");
}
}}

}


{


gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
gdjs.TutorialScene_9501Code.condition1IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.TutorialScene_9501Code.condition0IsTrue_0.val ) {
{
{gdjs.TutorialScene_9501Code.conditionTrue_1 = gdjs.TutorialScene_9501Code.condition1IsTrue_0;
gdjs.TutorialScene_9501Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16711700);
}
}}
if (gdjs.TutorialScene_9501Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonNext_BG"), gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1);
{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1[i].setColor("255;255;255");
}
}
{ //Subevents
gdjs.TutorialScene_9501Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = false;
{
gdjs.TutorialScene_9501Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TutorialScene_9501Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PoreShowAnimation"), gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text_Tutorial01"), gdjs.TutorialScene_9501Code.GDText_95Tutorial01Objects1);
{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1[i].setAnimationName("PoreShow");
}
}{for(var i = 0, len = gdjs.TutorialScene_9501Code.GDText_95Tutorial01Objects1.length ;i < len;++i) {
    gdjs.TutorialScene_9501Code.GDText_95Tutorial01Objects1[i].setTextAlignment("center");
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(6), false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setString("");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(8), false);
}}

}


{


gdjs.TutorialScene_9501Code.eventsList1(runtimeScene);
}


{


gdjs.TutorialScene_9501Code.eventsList3(runtimeScene);
}


{


gdjs.TutorialScene_9501Code.eventsList4(runtimeScene);
}


};

gdjs.TutorialScene_9501Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDPoreShowAnimationObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDPoreShowAnimation_95UIObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDPoreShowAnimation_95UIObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDPoreShowAnimation_95UIObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDMusicIconObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDMusicIconObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDMusicIconObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDGameTitleObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDGameTitleObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDGameTitleObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDGameSubTitleObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDGameSubTitleObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDGameSubTitleObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDFaceShopIconObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDFaceShopIconObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDFaceShopIconObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDBeliefIconObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDBeliefIconObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDBeliefIconObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDText_95WelcomeObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDText_95WelcomeObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDText_95WelcomeObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDTutorialBG_95UIObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDTutorialBG_95UIObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDTutorialBG_95UIObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDHand_95UIObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDHand_95UIObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDHand_95UIObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDText_95Tutorial01Objects1.length = 0;
gdjs.TutorialScene_9501Code.GDText_95Tutorial01Objects2.length = 0;
gdjs.TutorialScene_9501Code.GDText_95Tutorial01Objects3.length = 0;
gdjs.TutorialScene_9501Code.GDText_95Tutorial02Objects1.length = 0;
gdjs.TutorialScene_9501Code.GDText_95Tutorial02Objects2.length = 0;
gdjs.TutorialScene_9501Code.GDText_95Tutorial02Objects3.length = 0;
gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDButtonNext_95BGObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDText_95NextObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDText_95NextObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDText_95NextObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDMoleAnimation_95UIObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDMoleAnimation_95UIObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDMoleAnimation_95UIObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDCrossIconObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDCrossIconObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDCrossIconObjects3.length = 0;
gdjs.TutorialScene_9501Code.GDFlowerBGObjects1.length = 0;
gdjs.TutorialScene_9501Code.GDFlowerBGObjects2.length = 0;
gdjs.TutorialScene_9501Code.GDFlowerBGObjects3.length = 0;

gdjs.TutorialScene_9501Code.eventsList5(runtimeScene);
return;

}

gdjs['TutorialScene_9501Code'] = gdjs.TutorialScene_9501Code;
