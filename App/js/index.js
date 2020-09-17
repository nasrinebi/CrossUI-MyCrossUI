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
                .setLeft("3.8095238095238093em")
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("SWMM Input File")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput7")
                .setDirtyMark(false)
                .setLeft("3.8095238095238093em")
                .setTop("8.380952380952381em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Rainfall")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput8")
                .setDirtyMark(false)
                .setLeft("3.8095238095238093em")
                .setTop("11.428571428571429em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Temperature")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput11")
                .setDirtyMark(false)
                .setLeft("3.8095238095238093em")
                .setTop("14.476190476190476em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Cost File")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput12")
                .setDirtyMark(false)
                .setLeft("24.38095238095238em")
                .setTop("14.476190476190476em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Start Date")
                .setType("date")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput15")
                .setDirtyMark(false)
                .setLeft("24.38095238095238em")
                .setTop("17.523809523809526em")
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
                .setTop("5.333333333333333em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Iteration")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"200",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"300",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"400",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"500",
                        "imageClass":"xui-icon-number4"
                    },
                    {
                        "id":"c",
                        "caption":"600",
                        "imageClass":"xui-icon-number5"
                    },
                    {
                        "id":"c",
                        "caption":"700",
                        "imageClass":"xui-icon-number6"
                    },
                    {
                        "id":"c",
                        "caption":"800",
                        "imageClass":"xui-icon-number7"
                    },
                    {
                        "id":"c",
                        "caption":"900",
                        "imageClass":"xui-icon-number8"
                    },
                    {
                        "id":"c",
                        "caption":"1000",
                        "imageClass":"xui-icon-number9"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput30")
                .setDirtyMark(false)
                .setLeft("24.38095238095238em")
                .setTop("8.380952380952381em")
                .setWidth("17.98095238095238em")
                .setLabelSize("8em")
                .setLabelCaption("             ET")
                .setType("file")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput31")
                .setDirtyMark(false)
                .setLeft("24.38095238095238em")
                .setTop("11.428571428571429em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Optimization")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"NSGAII",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Scatter Search",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"ds",
                        "caption":"ds"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1")
                .setDirtyMark(false)
                .setLeft("13.714285714285714em")
                .setTop("1.5238095238095237em")
                .setWidth("21.02857142857143em")
                .setLabelSize("8em")
                .setValue("     Hydrologic Modeling")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setDirtyMark(false)
                .setLeft("18.285714285714285em")
                .setTop("22.095238095238095em")
                .setCaption("Run")
                .setImageClass("xui-icon-xui")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "Window will be closed once it is done.",
                            "Running",
                            400,
                            10000
                        ],
                        "method":"message",
                        "event":1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setDirtyMark(false)
                .setLeft("24.38095238095238em")
                .setTop("22.095238095238095em")
                .setCaption("Save")
                .setImageClass("xui-icon-xui")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "Window will be closed once it is done. ",
                            "Saving",
                            200,
                            3000
                        ],
                        "method":"message",
                        "event":1
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