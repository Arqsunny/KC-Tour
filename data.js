var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking1",
      "name": "Parking1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -3.0264913842850945,
        "pitch": 0.2709247679684239,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -0.37118361934696686,
          "pitch": -0.01861229621932914,
          "rotation": 2.356194490192345,
          "target": "1-parking2"
        },
        {
          "yaw": 2.5006345320709613,
          "pitch": 0.45161619527588215,
          "rotation": 1.5707963267948966,
          "target": "2-from-street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parking2",
      "name": "Parking2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.4114284850814744,
        "pitch": 0.17494848779440986,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -1.4040790250797652,
          "pitch": -0.0021729242644674684,
          "rotation": 3.141592653589793,
          "target": "0-parking1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-from-street",
      "name": "From Street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.19064365675631123,
        "pitch": -0.419338756915673,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -0.4767569430003302,
          "pitch": -0.03028550869964519,
          "rotation": 0,
          "target": "3-bbq-area"
        },
        {
          "yaw": 2.371199335732899,
          "pitch": -0.601997344047593,
          "rotation": 0,
          "target": "0-parking1"
        },
        {
          "yaw": -0.09584074912772245,
          "pitch": -0.08048060985545291,
          "rotation": 1.5707963267948966,
          "target": "4-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bbq-area",
      "name": "BBQ-Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.9481076867509657,
        "pitch": 0.35965855417471104,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -1.705674161726936,
          "pitch": 0.2221782532368355,
          "rotation": 4.71238898038469,
          "target": "2-from-street"
        },
        {
          "yaw": -2.80450136518834,
          "pitch": 0.09217513438898095,
          "rotation": 4.71238898038469,
          "target": "4-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.12494967841006499,
        "pitch": 0.0800045729032739,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -0.08954278658936943,
          "pitch": 0.11798403416526604,
          "rotation": 0,
          "target": "5-lobby"
        },
        {
          "yaw": 2.9696613850341764,
          "pitch": -0.022940360201840093,
          "rotation": 0,
          "target": "2-from-street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.8221615737484385,
        "pitch": -0.02190301634199443,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -1.222167173772208,
          "pitch": 0.10024568891420671,
          "rotation": 0,
          "target": "4-entry"
        },
        {
          "yaw": 1.9259308356564793,
          "pitch": 0.08601602117339979,
          "rotation": 5.497787143782138,
          "target": "6-waiting-area"
        },
        {
          "yaw": 1.4817901057199538,
          "pitch": 0.12684124900584592,
          "rotation": 5.497787143782138,
          "target": "7-living-room"
        },
        {
          "yaw": -2.714023688045085,
          "pitch": 0.045639355634680356,
          "rotation": 0.7853981633974483,
          "target": "9-stair-2nd-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-waiting-area",
      "name": "Waiting Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5011246599273154,
        "pitch": 0.39720964078763643,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -1.5353239220847108,
          "pitch": 0.03528026347771629,
          "rotation": 0,
          "target": "5-lobby"
        },
        {
          "yaw": -1.1492750744660718,
          "pitch": 0.15118980091566492,
          "rotation": 1.5707963267948966,
          "target": "7-living-room"
        },
        {
          "yaw": -1.748589470826989,
          "pitch": 0.01839751876762641,
          "rotation": 5.497787143782138,
          "target": "9-stair-2nd-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.663350105773408,
        "pitch": 0.6249779244448632,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -2.938711765999173,
          "pitch": 0.25354891277147473,
          "rotation": 0.7853981633974483,
          "target": "6-waiting-area"
        },
        {
          "yaw": 2.332391173296255,
          "pitch": 0.10352151592552339,
          "rotation": 0.7853981633974483,
          "target": "8-main-conference-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-main-conference-room",
      "name": "Main Conference Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.8553897149287124,
        "pitch": 0.6272588152741605,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -2.5040466619447024,
          "pitch": 0.16324926802676565,
          "rotation": 0,
          "target": "7-living-room"
        },
        {
          "yaw": 2.617886767004684,
          "pitch": 0.13120950541737741,
          "rotation": 4.71238898038469,
          "target": "6-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stair-2nd-level",
      "name": "Stair 2nd Level",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.9411423510785077,
        "pitch": 0.07705481057610619,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -0.47554450261869796,
          "pitch": 0.470983239185383,
          "rotation": 4.71238898038469,
          "target": "5-lobby"
        },
        {
          "yaw": -0.21825232179742926,
          "pitch": -0.3957939261134005,
          "rotation": 0,
          "target": "10-entry-3rd-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-entry-3rd-level",
      "name": "Entry 3rd Level",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.11705453396789522,
        "pitch": 0.19096489864883281,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -1.446738345333177,
          "pitch": 0.1096159538267063,
          "rotation": 2.356194490192345,
          "target": "9-stair-2nd-level"
        },
        {
          "yaw": 1.7079822172299277,
          "pitch": 0.03246968660070948,
          "rotation": 0,
          "target": "11-1"
        },
        {
          "yaw": 0.9468161407817739,
          "pitch": 0.07561526290785459,
          "rotation": 0,
          "target": "25-fernando"
        },
        {
          "yaw": -2.764090475239378,
          "pitch": -0.006010116196119242,
          "rotation": 0,
          "target": "24-14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.31696300831737645,
        "pitch": 0.5236146455384691,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": 0.5296768382731418,
          "pitch": 0.21233530448590443,
          "rotation": 0,
          "target": "10-entry-3rd-level"
        },
        {
          "yaw": -1.011006071274199,
          "pitch": 0.15423600393464199,
          "rotation": 0,
          "target": "12-2"
        },
        {
          "yaw": -0.15500932095929976,
          "pitch": 0.16387819400626924,
          "rotation": 0,
          "target": "16-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.4564707274446782,
        "pitch": 0.4820603658560465,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": 1.7352633309642513,
          "pitch": 0.23187957261244918,
          "rotation": 0,
          "target": "11-1"
        },
        {
          "yaw": 0.8731345793665408,
          "pitch": 0.11151437667044206,
          "rotation": 0,
          "target": "10-entry-3rd-level"
        },
        {
          "yaw": -1.5168444766754199,
          "pitch": 0.17997829023412137,
          "rotation": 0,
          "target": "13-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5101718941381659,
        "pitch": 0.6361780168861415,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": 1.7383047911641922,
          "pitch": 0.09715873916409024,
          "rotation": 0,
          "target": "12-2"
        },
        {
          "yaw": -0.863464587403584,
          "pitch": 0.1526376249544814,
          "rotation": 0,
          "target": "14-4"
        },
        {
          "yaw": 0.5902978115442945,
          "pitch": 0.18065798579903714,
          "rotation": 0,
          "target": "15-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-4",
      "name": "4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.9988291720217504,
        "pitch": 0.06988979281928565,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": 2.711170438642058,
          "pitch": -0.08565374288520289,
          "rotation": 0,
          "target": "13-3"
        },
        {
          "yaw": 1.588909136766465,
          "pitch": -0.12083585710885636,
          "rotation": 0,
          "target": "15-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-5",
      "name": "5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -3.068076125419621,
        "pitch": 0.3158007502511424,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -0.17601577981690397,
          "pitch": -0.01654276064474658,
          "rotation": 0,
          "target": "14-4"
        },
        {
          "yaw": -1.6148356272202804,
          "pitch": 0.052796545026204456,
          "rotation": 0,
          "target": "13-3"
        },
        {
          "yaw": -3.03479407866455,
          "pitch": 0.12135045258706789,
          "rotation": 0,
          "target": "16-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-6",
      "name": "6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09906994293315918,
          "pitch": 0.15199679622711493,
          "rotation": 0,
          "target": "15-5"
        },
        {
          "yaw": 2.3297934589946756,
          "pitch": 0.1416585859902284,
          "rotation": 0,
          "target": "10-entry-3rd-level"
        },
        {
          "yaw": 2.0948664559454526,
          "pitch": 0.03218917108831576,
          "rotation": 0,
          "target": "9-stair-2nd-level"
        },
        {
          "yaw": 1.8511336214793754,
          "pitch": 0.009564564448224289,
          "rotation": 0,
          "target": "17-7"
        },
        {
          "yaw": -1.8336149855184036,
          "pitch": 0.004112253384466413,
          "rotation": 0,
          "target": "11-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-7",
      "name": "7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.1092379970394166,
        "pitch": 0.17685818239396767,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -1.8832765369159858,
          "pitch": 0.07929871518608067,
          "rotation": 0,
          "target": "10-entry-3rd-level"
        },
        {
          "yaw": -0.6765957889556979,
          "pitch": 0.15797487943272692,
          "rotation": 0,
          "target": "18-8"
        },
        {
          "yaw": 1.5898800819841465,
          "pitch": 0.04457828797789709,
          "rotation": 0,
          "target": "19-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-8",
      "name": "8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.2615478040871686,
        "pitch": 0.595411205122403,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -2.079963819418264,
          "pitch": 0.22852918417779478,
          "rotation": 0,
          "target": "17-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-9",
      "name": "9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.5738153499622634,
        "pitch": 0.25206124332133584,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": 0.24370238270526556,
          "pitch": 0.04949422363584688,
          "rotation": 0,
          "target": "17-7"
        },
        {
          "yaw": 1.8893948844234378,
          "pitch": 0.10668307320461601,
          "rotation": 0,
          "target": "20-10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-10",
      "name": "10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.40545341084791175,
        "pitch": 0.25984666561014436,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -0.6079573668813794,
          "pitch": 0.06723487407716355,
          "rotation": 0,
          "target": "19-9"
        },
        {
          "yaw": 1.142022527075408,
          "pitch": 0.0060061575502814435,
          "rotation": 0,
          "target": "21-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-11",
      "name": "11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.6900763350193149,
        "pitch": 0.21683756233672824,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -1.607313062958415,
          "pitch": 0.021062908058137708,
          "rotation": 0,
          "target": "20-10"
        },
        {
          "yaw": 1.5667323528781623,
          "pitch": 0.06911808864710522,
          "rotation": 0,
          "target": "22-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-12",
      "name": "12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.2172052506731923,
        "pitch": 0.10202765517433576,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": 1.6950530199979,
          "pitch": 0.07803003126578645,
          "rotation": 0,
          "target": "21-11"
        },
        {
          "yaw": -2.9545923849644886,
          "pitch": 0.09037494589153638,
          "rotation": 0,
          "target": "21-11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-13",
      "name": "13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.6806203982101255,
        "pitch": 0.2652228035193289,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": 1.6187411107877079,
          "pitch": 0.02814921726777797,
          "rotation": 0,
          "target": "22-12"
        },
        {
          "yaw": -1.5441307851288766,
          "pitch": 0.08462953326161404,
          "rotation": 0,
          "target": "17-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-14",
      "name": "14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.400922877879058,
        "pitch": 0.44959270946337426,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": 1.6544440129523839,
          "pitch": 0.08382071048512785,
          "rotation": 0,
          "target": "23-13"
        },
        {
          "yaw": -3.015417446675956,
          "pitch": 0.08012338285520215,
          "rotation": 0,
          "target": "10-entry-3rd-level"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-fernando",
      "name": "Fernando",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.2175697548457567,
        "pitch": 0.1989171026394736,
        "fov": 1.49277429278099
      },
      "linkHotspots": [
        {
          "yaw": -0.8865346017728832,
          "pitch": -0.0038914856479337345,
          "rotation": 0,
          "target": "10-entry-3rd-level"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "HOK-KC-2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
