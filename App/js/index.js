// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput5")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("3.8095238095238093em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("SWMM Input File")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput7")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("6.857142857142857em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Rainfall")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput8")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("9.904761904761905em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Temperature")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput11")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("12.952380952380953em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Cost File")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput12")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("16em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Start Date")
                .setType("date")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput15")
                .setDirtyMark(false)
                .setLeft("6.095238095238095em")
                .setTop("19.047619047619047em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("End Date")
                .setType("date")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput20")
                .setDirtyMark(false)
                .setLeft("24.38095238095238em")
                .setTop("3.8095238095238093em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Iteration")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"100",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"200",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"300",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"400",
                        "imageClass":"xui-icon-number4"
                    },
                    {
                        "id":"c",
                        "caption":"500",
                        "imageClass":"xui-icon-number5"
                    },
                    {
                        "id":"c",
                        "caption":"600",
                        "imageClass":"xui-icon-number6"
                    },
                    {
                        "id":"c",
                        "caption":"700",
                        "imageClass":"xui-icon-number7"
                    },
                    {
                        "id":"c",
                        "caption":"800",
                        "imageClass":"xui-icon-number8"
                    },
    
                    {
                        "id":"c",
                        "caption":"900",
                        "imageClass":"xui-icon-number9"
                    },
          
                    {
                        "id":"c",
                        "caption":"1000",
                        "imageClass":"xui-icon-number10"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        functions:{ }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});