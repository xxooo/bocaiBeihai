var DB = {
    game: [{ gno: 1, gname: "\u516d \u5408 \u5f69", ggno: 1, rule: "YYYYNNN" }, { gno: 2, gname: "\u798f\u5f693D", ggno: 2, rule: "YYYYNNN" }, { gno: 3, gname: "\u4f53\u5f69P3", ggno: 2, rule: "YYNNN" }, { gno: 4, gname: "\u4e0a\u6d77\u65f6\u65f6\u4e50", ggno: 2, rule: "YYYYMMDD-NN" }, { gno: 5, gname: "\u9ed1\u9f99\u6c5f\u65f6\u65f6\u5f69", ggno: 3, rule: "NNNNNNNN" }, { gno: 6, gname: "\u91cd\u5e86\u65f6\u65f6\u5f69", ggno: 3, rule: "YYYYMMDD-NNN" }, { gno: 7, gname: "\u6c5f\u897f\u65f6\u65f6\u5f69", ggno: 3, rule: "YYYYMMDD-NNN" }, {
        gno: 8, gname: "\u5e7f\u4e1c\u5feb\u4e50\u5341\u5206",
        ggno: 4, rule: "YYYYMMDD-NN"
    }, { gno: 9, gname: "\u5e7f\u897f\u5feb\u4e50\u5341\u5206", ggno: 5, rule: "YYYYAAA-NN" }, { gno: 10, gname: "\u65b0\u7586\u65f6\u65f6\u5f69", ggno: 3, rule: "YYYYMMDD-NN" }, { gno: 11, gname: "\u5317\u4eac\u8d5b\u8f66", ggno: 6, rule: "NNNNNN" }, { gno: 12, gname: "\u6c5f\u82cf\u5feb3", ggno: 7, rule: "YYYYMMDDNNN" }, { gno: 13, gname: "\u5317\u4eac\u5feb\u4e508", ggno: 8, rule: "NNNNNN" }, { gno: 14, gname: "\u5929\u6d25\u65f6\u65f6\u5f69", ggno: 3, rule: "YYYYMMDDNNN" }, { gno: 15, gname: "\u5c71\u4e1c11\u9009\u4e94", ggno: 9, rule: "YYYYMMDDNN" },
    { gno: 17, gname: "\u6c5f\u897f11\u9009\u4e94", ggno: 9, rule: "YYYYMMDDNN" }, { gno: 18, gname: "\u5e7f\u4e1c11\u9009\u4e94", ggno: 9, rule: "YYYYMMDDNN" }, { gno: 19, gname: "\u5b89\u5fbd\u5feb\u4e09", ggno: 7, rule: "YYYYMMDDNNN" }, { gno: 20, gname: "\u5e78\u8fd0\u519c\u573a", ggno: 4, rule: "YYYYMMDD-NN" }, { gno: 21, gname: "\u5e78\u8fd0\u98de\u8247", ggno: 6, rule: "YYYYMMDDNNN" }, { gno: 22, gname: "\u6781\u901f\u8d5b\u8f66", ggno: 6, rule: "NNNNNNNN" }, { gno: 23, gname: "\u6781\u901f\u65f6\u65f6\u5f69", ggno: 3, rule: "NNNNNNNN" }, {
        gno: 24, gname: "\u4f53\u5f69\u6392\u5217\u4e94",
        ggno: 3, rule: "YYNNN"
    }, { gno: 25, gname: "\u4e03\u661f\u5f69", ggno: 11, rule: "YYNNN" }, { gno: 26, gname: "EPS\u8d5b\u9a6c", ggno: 6, rule: "YYYYMMDDNNN" }, { gno: 27, gname: "\u8d85\u7ea7\u5feb5", ggno: 3, rule: "YYYYMMDDNNN" }, { gno: 28, gname: "\u6781\u901f\u98de\u8247", ggno: 6, rule: "NNNNNNNN" }, { gno: 29, gname: "\u5e7f\u897f\u5feb3", ggno: 7, rule: "YYMMDDNNN" }, { gno: 31, gname: "PC\u86cb\u86cb", ggno: 10, rule: "NNNNNN" }, { gno: 32, gname: "\u6c34\u4e0a\u6469\u6258", ggno: 6, rule: "YYYYMMDDNNN" }, { gno: 34, gname: "EPS\u8d5b\u9a6c180", ggno: 6, rule: "YYYYMMDDNNN" },
    { gno: 35, gname: "EPS\u8d5b\u9a6c300", ggno: 6, rule: "YYYYMMDDNNN" }, { gno: 36, gname: "\u8d85\u7ea7\u5feb5_3min", ggno: 3, rule: "YYYYMMDDNNN" }, { gno: 37, gname: "\u8d85\u7ea7\u5feb5_5min", ggno: 3, rule: "YYYYMMDDNNN" }, { gno: 38, gname: "\u6fb3\u6d32\u5e78\u8fd05", ggno: 3, rule: "NNNNNNNN" }, { gno: 39, gname: "\u6fb3\u6d32\u5e78\u8fd08", ggno: 4, rule: "NNNNNNNN" }, { gno: 40, gname: "\u6fb3\u6d32\u5e78\u8fd010", ggno: 6, rule: "NNNNNNNN" }, { gno: 41, gname: "\u6fb3\u6d32\u5e78\u8fd020", ggno: 8, rule: "NNNNNNNN" }], oddsgroup: [{ oddsgno: 201, oddsgname: "\u6b63\u7801" },
    { oddsgno: 202, oddsgname: "\u4e00\u5b57\u4e0d\u5b9a\u4f4d(\u524d\u4e09)" }, { oddsgno: 203, oddsgname: "\u4e00\u5b57\u4e0d\u5b9a\u4f4d(\u4e2d\u4e09)" }, { oddsgno: 204, oddsgname: "\u4e00\u5b57\u4e0d\u5b9a\u4f4d(\u540e\u4e09)" }, { oddsgno: 205, oddsgname: "\u7b2c\u4e00\u7403" }, { oddsgno: 206, oddsgname: "\u7b2c\u4e8c\u7403" }, { oddsgno: 207, oddsgname: "\u7b2c\u4e09\u7403" }, { oddsgno: 208, oddsgname: "\u7b2c\u56db\u7403" }, { oddsgno: 209, oddsgname: "\u7b2c\u4e94\u7403" }, { oddsgno: 210, oddsgname: "\u7b2c\u4e00\u7403\u5927\u5c0f" }, {
        oddsgno: 211,
        oddsgname: "\u7b2c\u4e8c\u7403\u5927\u5c0f"
    }, { oddsgno: 212, oddsgname: "\u7b2c\u4e09\u7403\u5927\u5c0f" }, { oddsgno: 213, oddsgname: "\u7b2c\u56db\u7403\u5927\u5c0f" }, { oddsgno: 214, oddsgname: "\u7b2c\u4e94\u7403\u5927\u5c0f" }, { oddsgno: 215, oddsgname: "\u7b2c\u4e00\u7403\u5355\u53cc" }, { oddsgno: 216, oddsgname: "\u7b2c\u4e8c\u7403\u5355\u53cc" }, { oddsgno: 217, oddsgname: "\u7b2c\u4e09\u7403\u5355\u53cc" }, { oddsgno: 218, oddsgname: "\u7b2c\u56db\u7403\u5355\u53cc" }, { oddsgno: 219, oddsgname: "\u7b2c\u4e94\u7403\u5355\u53cc" }, {
        oddsgno: 220,
        oddsgname: "\u4e07\u8d28\u5408"
    }, { oddsgno: 221, oddsgname: "\u5343\u8d28\u5408" }, { oddsgno: 222, oddsgname: "\u767e\u8d28\u5408" }, { oddsgno: 223, oddsgname: "\u62fe\u8d28\u5408" }, { oddsgno: 224, oddsgname: "\u4e2a\u8d28\u5408" }, { oddsgno: 225, oddsgname: "\u4e8c\u5b57\u4e0d\u5b9a\u4f4d(\u524d\u4e09)" }, { oddsgno: 226, oddsgname: "\u4e8c\u5b57\u4e0d\u5b9a\u4f4d(\u4e2d\u4e09)" }, { oddsgno: 227, oddsgname: "\u4e8c\u5b57\u4e0d\u5b9a\u4f4d(\u540e\u4e09)" }, { oddsgno: 228, oddsgname: "\u767e\u62fe\u5b9a\u4f4d(\u524d\u4e09)" }, {
        oddsgno: 229,
        oddsgname: "\u767e\u62fe\u5b9a\u4f4d(\u4e2d\u4e09)"
    }, { oddsgno: 230, oddsgname: "\u767e\u62fe\u5b9a\u4f4d(\u540e\u4e09)" }, { oddsgno: 231, oddsgname: "\u767e\u4e2a\u5b9a\u4f4d(\u524d\u4e09)" }, { oddsgno: 232, oddsgname: "\u767e\u4e2a\u5b9a\u4f4d(\u4e2d\u4e09)" }, { oddsgno: 233, oddsgname: "\u767e\u4e2a\u5b9a\u4f4d(\u540e\u4e09)" }, { oddsgno: 234, oddsgname: "\u62fe\u4e2a\u5b9a\u4f4d(\u524d\u4e09)" }, { oddsgno: 235, oddsgname: "\u62fe\u4e2a\u5b9a\u4f4d(\u4e2d\u4e09)" }, { oddsgno: 236, oddsgname: "\u62fe\u4e2a\u5b9a\u4f4d(\u540e\u4e09)" },
    { oddsgno: 237, oddsgname: "\u767e\u62fe\u548c\u6570\u5355\u53cc(\u524d\u4e09)" }, { oddsgno: 238, oddsgname: "\u767e\u62fe\u548c\u6570\u5355\u53cc(\u4e2d\u4e09)" }, { oddsgno: 239, oddsgname: "\u767e\u62fe\u548c\u6570\u5355\u53cc(\u540e\u4e09)" }, { oddsgno: 240, oddsgname: "\u767e\u4e2a\u548c\u6570\u5355\u53cc(\u524d\u4e09)" }, { oddsgno: 241, oddsgname: "\u767e\u4e2a\u548c\u6570\u5355\u53cc(\u4e2d\u4e09)" }, { oddsgno: 242, oddsgname: "\u767e\u4e2a\u548c\u6570\u5355\u53cc(\u540e\u4e09)" }, { oddsgno: 243, oddsgname: "\u62fe\u4e2a\u548c\u6570\u5355\u53cc(\u524d\u4e09)" },
    { oddsgno: 244, oddsgname: "\u62fe\u4e2a\u548c\u6570\u5355\u53cc(\u4e2d\u4e09)" }, { oddsgno: 245, oddsgname: "\u62fe\u4e2a\u548c\u6570\u5355\u53cc(\u540e\u4e09)" }, { oddsgno: 246, oddsgname: "\u4e09\u5b57\u4e0d\u5b9a\u4f4d(\u524d\u4e09)" }, { oddsgno: 247, oddsgname: "\u4e09\u5b57\u4e0d\u5b9a\u4f4d(\u4e2d\u4e09)" }, { oddsgno: 248, oddsgname: "\u4e09\u5b57\u4e0d\u5b9a\u4f4d(\u540e\u4e09)" }, { oddsgno: 249, oddsgname: "\u767e\u62fe\u4e2a\u5b9a\u4f4d(\u524d\u4e09)" }, { oddsgno: 250, oddsgname: "\u767e\u62fe\u4e2a\u5b9a\u4f4d(\u4e2d\u4e09)" },
    { oddsgno: 251, oddsgname: "\u767e\u62fe\u4e2a\u5b9a\u4f4d(\u540e\u4e09)" }, { oddsgno: 252, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5927\u5c0f(\u524d\u4e09)" }, { oddsgno: 253, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5927\u5c0f(\u4e2d\u4e09)" }, { oddsgno: 254, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5927\u5c0f(\u540e\u4e09)" }, { oddsgno: 255, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5355\u53cc(\u524d\u4e09)" }, { oddsgno: 256, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5355\u53cc(\u4e2d\u4e09)" }, { oddsgno: 257, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5355\u53cc(\u540e\u4e09)" },
    { oddsgno: 258, oddsgname: "\u7ec4\u9009\u4e09-5(\u524d\u4e09)" }, { oddsgno: 259, oddsgname: "\u7ec4\u9009\u4e09-5(\u4e2d\u4e09)" }, { oddsgno: 260, oddsgname: "\u7ec4\u9009\u4e09-5(\u540e\u4e09)" }, { oddsgno: 261, oddsgname: "\u7ec4\u9009\u4e09-6(\u524d\u4e09)" }, { oddsgno: 262, oddsgname: "\u7ec4\u9009\u4e09-6(\u4e2d\u4e09)" }, { oddsgno: 263, oddsgname: "\u7ec4\u9009\u4e09-6(\u540e\u4e09)" }, { oddsgno: 264, oddsgname: "\u7ec4\u9009\u4e09-7(\u524d\u4e09)" }, { oddsgno: 265, oddsgname: "\u7ec4\u9009\u4e09-7(\u4e2d\u4e09)" }, {
        oddsgno: 266,
        oddsgname: "\u7ec4\u9009\u4e09-7(\u540e\u4e09)"
    }, { oddsgno: 267, oddsgname: "\u7ec4\u9009\u4e09-8(\u524d\u4e09)" }, { oddsgno: 268, oddsgname: "\u7ec4\u9009\u4e09-8(\u4e2d\u4e09)" }, { oddsgno: 269, oddsgname: "\u7ec4\u9009\u4e09-8(\u540e\u4e09)" }, { oddsgno: 270, oddsgname: "\u7ec4\u9009\u4e09-9(\u524d\u4e09)" }, { oddsgno: 271, oddsgname: "\u7ec4\u9009\u4e09-9(\u4e2d\u4e09)" }, { oddsgno: 272, oddsgname: "\u7ec4\u9009\u4e09-9(\u540e\u4e09)" }, { oddsgno: 273, oddsgname: "\u7ec4\u4e09\u5168\u5305(\u524d\u4e09)" }, { oddsgno: 274, oddsgname: "\u7ec4\u4e09\u5168\u5305(\u4e2d\u4e09)" },
    { oddsgno: 275, oddsgname: "\u7ec4\u4e09\u5168\u5305(\u540e\u4e09)" }, { oddsgno: 276, oddsgname: "\u7ec4\u9009\u516d-4(\u524d\u4e09)" }, { oddsgno: 277, oddsgname: "\u7ec4\u9009\u516d-4(\u4e2d\u4e09)" }, { oddsgno: 278, oddsgname: "\u7ec4\u9009\u516d-4(\u540e\u4e09)" }, { oddsgno: 279, oddsgname: "\u7ec4\u9009\u516d-5(\u524d\u4e09)" }, { oddsgno: 280, oddsgname: "\u7ec4\u9009\u516d-5(\u4e2d\u4e09)" }, { oddsgno: 281, oddsgname: "\u7ec4\u9009\u516d-5(\u540e\u4e09)" }, { oddsgno: 282, oddsgname: "\u7ec4\u9009\u516d-6(\u524d\u4e09)" }, {
        oddsgno: 283,
        oddsgname: "\u7ec4\u9009\u516d-6(\u4e2d\u4e09)"
    }, { oddsgno: 284, oddsgname: "\u7ec4\u9009\u516d-6(\u540e\u4e09)" }, { oddsgno: 285, oddsgname: "\u7ec4\u9009\u516d-7(\u524d\u4e09)" }, { oddsgno: 286, oddsgname: "\u7ec4\u9009\u516d-7(\u4e2d\u4e09)" }, { oddsgno: 287, oddsgname: "\u7ec4\u9009\u516d-7(\u540e\u4e09)" }, { oddsgno: 288, oddsgname: "\u7ec4\u9009\u516d-8(\u524d\u4e09)" }, { oddsgno: 289, oddsgname: "\u7ec4\u9009\u516d-8(\u4e2d\u4e09)" }, { oddsgno: 290, oddsgname: "\u7ec4\u9009\u516d-8(\u540e\u4e09)" }, { oddsgno: 291, oddsgname: "\u590d\u5f0f\u7ec4\u5408(\u524d\u4e09)" },
    { oddsgno: 292, oddsgname: "\u590d\u5f0f\u7ec4\u5408(\u4e2d\u4e09)" }, { oddsgno: 293, oddsgname: "\u590d\u5f0f\u7ec4\u5408(\u540e\u4e09)" }, { oddsgno: 294, oddsgname: "\u767e\u62fe\u548c\u6570(\u524d\u4e09)" }, { oddsgno: 295, oddsgname: "\u767e\u62fe\u548c\u6570(\u4e2d\u4e09)" }, { oddsgno: 296, oddsgname: "\u767e\u62fe\u548c\u6570(\u540e\u4e09)" }, { oddsgno: 297, oddsgname: "\u767e\u4e2a\u548c\u6570(\u524d\u4e09)" }, { oddsgno: 298, oddsgname: "\u767e\u4e2a\u548c\u6570(\u4e2d\u4e09)" }, { oddsgno: 299, oddsgname: "\u767e\u4e2a\u548c\u6570(\u540e\u4e09)" },
    { oddsgno: 300, oddsgname: "\u62fe\u4e2a\u548c\u6570(\u524d\u4e09)" }, { oddsgno: 301, oddsgname: "\u62fe\u4e2a\u548c\u6570(\u4e2d\u4e09)" }, { oddsgno: 302, oddsgname: "\u62fe\u4e2a\u548c\u6570(\u540e\u4e09)" }, { oddsgno: 303, oddsgname: "\u767e\u62fe\u548c\u6570\u5c3e\u6570(\u524d\u4e09)" }, { oddsgno: 304, oddsgname: "\u767e\u62fe\u548c\u6570\u5c3e\u6570(\u4e2d\u4e09)" }, { oddsgno: 305, oddsgname: "\u767e\u62fe\u548c\u6570\u5c3e\u6570(\u540e\u4e09)" }, { oddsgno: 306, oddsgname: "\u767e\u4e2a\u548c\u6570\u5c3e\u6570(\u524d\u4e09)" },
    { oddsgno: 307, oddsgname: "\u767e\u4e2a\u548c\u6570\u5c3e\u6570(\u4e2d\u4e09)" }, { oddsgno: 308, oddsgname: "\u767e\u4e2a\u548c\u6570\u5c3e\u6570(\u540e\u4e09)" }, { oddsgno: 309, oddsgname: "\u62fe\u4e2a\u548c\u6570\u5c3e\u6570(\u524d\u4e09)" }, { oddsgno: 310, oddsgname: "\u62fe\u4e2a\u548c\u6570\u5c3e\u6570(\u4e2d\u4e09)" }, { oddsgno: 311, oddsgname: "\u62fe\u4e2a\u548c\u6570\u5c3e\u6570(\u540e\u4e09)" }, { oddsgno: 312, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570(\u524d\u4e09)" }, { oddsgno: 313, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570(\u4e2d\u4e09)" },
    { oddsgno: 314, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570(\u540e\u4e09)" }, { oddsgno: 315, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5c3e\u6570(\u524d\u4e09)" }, { oddsgno: 316, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5c3e\u6570(\u4e2d\u4e09)" }, { oddsgno: 317, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5c3e\u6570(\u540e\u4e09)" }, { oddsgno: 318, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5c3e\u6570\u5927\u5c0f(\u524d\u4e09)" }, { oddsgno: 319, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5c3e\u6570\u5927\u5c0f(\u4e2d\u4e09)" },
    { oddsgno: 320, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5c3e\u6570\u5927\u5c0f(\u540e\u4e09)" }, { oddsgno: 321, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5c3e\u6570\u8d28\u5408(\u524d\u4e09)" }, { oddsgno: 322, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5c3e\u6570\u8d28\u5408(\u4e2d\u4e09)" }, { oddsgno: 323, oddsgname: "\u767e\u62fe\u4e2a\u548c\u6570\u5c3e\u6570\u8d28\u5408(\u540e\u4e09)" }, { oddsgno: 324, oddsgname: "\u4e00\u5b57\u8fc7\u5173(\u524d\u4e09)" }, { oddsgno: 325, oddsgname: "\u4e00\u5b57\u8fc7\u5173(\u4e2d\u4e09)" },
    { oddsgno: 326, oddsgname: "\u4e00\u5b57\u8fc7\u5173(\u540e\u4e09)" }, { oddsgno: 327, oddsgname: "\u8de8\u5ea6(\u524d\u4e09)" }, { oddsgno: 328, oddsgname: "\u8de8\u5ea6(\u4e2d\u4e09)" }, { oddsgno: 329, oddsgname: "\u8de8\u5ea6(\u540e\u4e09)" }, { oddsgno: 330, oddsgname: "\u8c79\u5b50(\u524d\u4e09)" }, { oddsgno: 331, oddsgname: "\u8c79\u5b50(\u4e2d\u4e09)" }, { oddsgno: 332, oddsgname: "\u8c79\u5b50(\u540e\u4e09)" }, { oddsgno: 333, oddsgname: "\u987a\u5b50(\u524d\u4e09)" }, { oddsgno: 334, oddsgname: "\u987a\u5b50(\u4e2d\u4e09)" }, {
        oddsgno: 335,
        oddsgname: "\u987a\u5b50(\u540e\u4e09)"
    }, { oddsgno: 336, oddsgname: "\u5bf9\u5b50(\u524d\u4e09)" }, { oddsgno: 337, oddsgname: "\u5bf9\u5b50(\u4e2d\u4e09)" }, { oddsgno: 338, oddsgname: "\u5bf9\u5b50(\u540e\u4e09)" }, { oddsgno: 339, oddsgname: "\u534a\u987a(\u524d\u4e09)" }, { oddsgno: 340, oddsgname: "\u534a\u987a(\u4e2d\u4e09)" }, { oddsgno: 341, oddsgname: "\u534a\u987a(\u540e\u4e09)" }, { oddsgno: 342, oddsgname: "\u6742\u516d(\u524d\u4e09)" }, { oddsgno: 343, oddsgname: "\u6742\u516d(\u4e2d\u4e09)" }, { oddsgno: 344, oddsgname: "\u6742\u516d(\u540e\u4e09)" },
    { oddsgno: 345, oddsgname: "\u603b\u548c\u5355\u53cc" }, { oddsgno: 346, oddsgname: "\u603b\u548c\u5927\u5c0f" }, { oddsgno: 347, oddsgname: "\u9f99\u864e\u548c" }, { oddsgno: 348, oddsgname: "1,2\u7403\u548c\u6570\u5355\u53cc" }, { oddsgno: 349, oddsgname: "1,3\u7403\u548c\u6570\u5355\u53cc" }, { oddsgno: 350, oddsgname: "1,4\u7403\u548c\u6570\u5355\u53cc" }, { oddsgno: 351, oddsgname: "1,5\u7403\u548c\u6570\u5355\u53cc" }, { oddsgno: 352, oddsgname: "2,3\u7403\u548c\u6570\u5355\u53cc" }, { oddsgno: 353, oddsgname: "2,4\u7403\u548c\u6570\u5355\u53cc" },
    { oddsgno: 354, oddsgname: "2,5\u7403\u548c\u6570\u5355\u53cc" }, { oddsgno: 355, oddsgname: "3,4\u7403\u548c\u6570\u5355\u53cc" }, { oddsgno: 356, oddsgname: "3,5\u7403\u548c\u6570\u5355\u53cc" }, { oddsgno: 357, oddsgname: "4,5\u7403\u548c\u6570\u5355\u53cc" }, { oddsgno: 358, oddsgname: "\u725b\u725b" }, { oddsgno: 359, oddsgname: "\u725b\u5355\u53cc" }, { oddsgno: 360, oddsgname: "\u725b\u5927\u5c0f" }, { oddsgno: 361, oddsgname: "\u725b\u8d28\u5408" }, { oddsgno: 362, oddsgname: "\u68ad\u54c8" }, { oddsgno: 368, oddsgname: "1,2\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" },
    { oddsgno: 369, oddsgname: "1,3\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 370, oddsgname: "1,4\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 371, oddsgname: "1,5\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 372, oddsgname: "2,3\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 373, oddsgname: "2,4\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 374, oddsgname: "2,5\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 375, oddsgname: "3,4\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" },
    { oddsgno: 376, oddsgname: "3,5\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 377, oddsgname: "4,5\u7403\u548c\u6570\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 401, oddsgname: "\u7b2c\u4e00\u7403" }, { oddsgno: 402, oddsgname: "\u7b2c\u4e8c\u7403" }, { oddsgno: 403, oddsgname: "\u7b2c\u4e09\u7403" }, { oddsgno: 404, oddsgname: "\u7b2c\u56db\u7403" }, { oddsgno: 405, oddsgname: "\u7b2c\u4e94\u7403" }, { oddsgno: 406, oddsgname: "\u7b2c\u516d\u7403" }, { oddsgno: 407, oddsgname: "\u7b2c\u4e03\u7403" }, { oddsgno: 408, oddsgname: "\u7b2c\u516b\u7403" },
    { oddsgno: 409, oddsgname: "\u7b2c1\u7403\u5355\u53cc" }, { oddsgno: 410, oddsgname: "\u7b2c2\u7403\u5355\u53cc" }, { oddsgno: 411, oddsgname: "\u7b2c3\u7403\u5355\u53cc" }, { oddsgno: 412, oddsgname: "\u7b2c4\u7403\u5355\u53cc" }, { oddsgno: 413, oddsgname: "\u7b2c5\u7403\u5355\u53cc" }, { oddsgno: 414, oddsgname: "\u7b2c6\u7403\u5355\u53cc" }, { oddsgno: 415, oddsgname: "\u7b2c7\u7403\u5355\u53cc" }, { oddsgno: 416, oddsgname: "\u7b2c8\u7403\u5355\u53cc" }, { oddsgno: 417, oddsgname: "\u7b2c1\u7403\u5927\u5c0f" }, { oddsgno: 418, oddsgname: "\u7b2c2\u7403\u5927\u5c0f" },
    { oddsgno: 419, oddsgname: "\u7b2c3\u7403\u5927\u5c0f" }, { oddsgno: 420, oddsgname: "\u7b2c4\u7403\u5927\u5c0f" }, { oddsgno: 421, oddsgname: "\u7b2c5\u7403\u5927\u5c0f" }, { oddsgno: 422, oddsgname: "\u7b2c6\u7403\u5927\u5c0f" }, { oddsgno: 423, oddsgname: "\u7b2c7\u7403\u5927\u5c0f" }, { oddsgno: 424, oddsgname: "\u7b2c8\u7403\u5927\u5c0f" }, { oddsgno: 425, oddsgname: "\u7b2c1\u7403\u5408\u6570\u5355\u53cc" }, { oddsgno: 426, oddsgname: "\u7b2c2\u7403\u5408\u6570\u5355\u53cc" }, { oddsgno: 427, oddsgname: "\u7b2c3\u7403\u5408\u6570\u5355\u53cc" },
    { oddsgno: 428, oddsgname: "\u7b2c4\u7403\u5408\u6570\u5355\u53cc" }, { oddsgno: 429, oddsgname: "\u7b2c5\u7403\u5408\u6570\u5355\u53cc" }, { oddsgno: 430, oddsgname: "\u7b2c6\u7403\u5408\u6570\u5355\u53cc" }, { oddsgno: 431, oddsgname: "\u7b2c7\u7403\u5408\u6570\u5355\u53cc" }, { oddsgno: 432, oddsgname: "\u7b2c8\u7403\u5408\u6570\u5355\u53cc" }, { oddsgno: 433, oddsgname: "\u7b2c1\u7403\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 434, oddsgname: "\u7b2c2\u7403\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 435, oddsgname: "\u7b2c3\u7403\u5c3e\u6570\u5927\u5c0f" },
    { oddsgno: 436, oddsgname: "\u7b2c4\u7403\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 437, oddsgname: "\u7b2c5\u7403\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 438, oddsgname: "\u7b2c6\u7403\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 439, oddsgname: "\u7b2c7\u7403\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 440, oddsgname: "\u7b2c8\u7403\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 441, oddsgname: "\u7b2c1\u7403\u65b9\u5411" }, { oddsgno: 442, oddsgname: "\u7b2c2\u7403\u65b9\u5411" }, { oddsgno: 443, oddsgname: "\u7b2c3\u7403\u65b9\u5411" }, { oddsgno: 444, oddsgname: "\u7b2c4\u7403\u65b9\u5411" },
    { oddsgno: 445, oddsgname: "\u7b2c5\u7403\u65b9\u5411" }, { oddsgno: 446, oddsgname: "\u7b2c6\u7403\u65b9\u5411" }, { oddsgno: 447, oddsgname: "\u7b2c7\u7403\u65b9\u5411" }, { oddsgno: 448, oddsgname: "\u7b2c8\u7403\u65b9\u5411" }, { oddsgno: 449, oddsgname: "\u7b2c1\u7403\u4e2d\u53d1\u767d" }, { oddsgno: 450, oddsgname: "\u7b2c2\u7403\u4e2d\u53d1\u767d" }, { oddsgno: 451, oddsgname: "\u7b2c3\u7403\u4e2d\u53d1\u767d" }, { oddsgno: 452, oddsgname: "\u7b2c4\u7403\u4e2d\u53d1\u767d" }, { oddsgno: 453, oddsgname: "\u7b2c5\u7403\u4e2d\u53d1\u767d" }, {
        oddsgno: 454,
        oddsgname: "\u7b2c6\u7403\u4e2d\u53d1\u767d"
    }, { oddsgno: 455, oddsgname: "\u7b2c7\u7403\u4e2d\u53d1\u767d" }, { oddsgno: 456, oddsgname: "\u7b2c8\u7403\u4e2d\u53d1\u767d" }, { oddsgno: 457, oddsgname: "\u603b\u548c\u5355\u53cc" }, { oddsgno: 458, oddsgname: "\u603b\u548c\u5927\u5c0f" }, { oddsgno: 459, oddsgname: "\u603b\u548c\u5c3e\u6570\u5927\u5c0f" }, { oddsgno: 460, oddsgname: "\u9f99\u864e" }, { oddsgno: 461, oddsgname: "\u9009\u4e00\u6570\u6295" }, { oddsgno: 462, oddsgname: "\u9009\u4e00\u7ea2\u6295" }, { oddsgno: 463, oddsgname: "\u4efb\u9009\u4e8c" },
    { oddsgno: 464, oddsgname: "\u9009\u4e8c\u8fde\u76f4" }, { oddsgno: 465, oddsgname: "\u9009\u4e8c\u8fde\u7ec4" }, { oddsgno: 466, oddsgname: "\u4efb\u9009\u4e09" }, { oddsgno: 467, oddsgname: "\u9009\u4e09\u524d\u76f4" }, { oddsgno: 468, oddsgname: "\u9009\u4e09\u524d\u7ec4" }, { oddsgno: 469, oddsgname: "\u4efb\u9009\u56db" }, { oddsgno: 470, oddsgname: "\u4efb\u9009\u4e94" }, { oddsgno: 601, oddsgname: "\u51a0\u519b" }, { oddsgno: 602, oddsgname: "\u4e9a\u519b" }, { oddsgno: 603, oddsgname: "\u7b2c\u4e09\u540d" }, { oddsgno: 604, oddsgname: "\u7b2c\u56db\u540d" },
    { oddsgno: 605, oddsgname: "\u7b2c\u4e94\u540d" }, { oddsgno: 606, oddsgname: "\u7b2c\u516d\u540d" }, { oddsgno: 607, oddsgname: "\u7b2c\u4e03\u540d" }, { oddsgno: 608, oddsgname: "\u7b2c\u516b\u540d" }, { oddsgno: 609, oddsgname: "\u7b2c\u4e5d\u540d" }, { oddsgno: 610, oddsgname: "\u7b2c\u5341\u540d" }, { oddsgno: 611, oddsgname: "\u51a0\u519b\u5355\u53cc" }, { oddsgno: 612, oddsgname: "\u4e9a\u519b\u5355\u53cc" }, { oddsgno: 613, oddsgname: "\u7b2c\u4e09\u540d\u5355\u53cc" }, { oddsgno: 614, oddsgname: "\u7b2c\u56db\u540d\u5355\u53cc" }, { oddsgno: 615, oddsgname: "\u7b2c\u4e94\u540d\u5355\u53cc" },
    { oddsgno: 616, oddsgname: "\u7b2c\u516d\u540d\u5355\u53cc" }, { oddsgno: 617, oddsgname: "\u7b2c\u4e03\u540d\u5355\u53cc" }, { oddsgno: 618, oddsgname: "\u7b2c\u516b\u540d\u5355\u53cc" }, { oddsgno: 619, oddsgname: "\u7b2c\u4e5d\u540d\u5355\u53cc" }, { oddsgno: 620, oddsgname: "\u7b2c\u5341\u540d\u5355\u53cc" }, { oddsgno: 621, oddsgname: "\u51a0\u519b\u5927\u5c0f" }, { oddsgno: 622, oddsgname: "\u4e9a\u519b\u5927\u5c0f" }, { oddsgno: 623, oddsgname: "\u7b2c\u4e09\u540d\u5927\u5c0f" }, { oddsgno: 624, oddsgname: "\u7b2c\u56db\u540d\u5927\u5c0f" },
    { oddsgno: 625, oddsgname: "\u7b2c\u4e94\u540d\u5927\u5c0f" }, { oddsgno: 626, oddsgname: "\u7b2c\u516d\u540d\u5927\u5c0f" }, { oddsgno: 627, oddsgname: "\u7b2c\u4e03\u540d\u5927\u5c0f" }, { oddsgno: 628, oddsgname: "\u7b2c\u516b\u540d\u5927\u5c0f" }, { oddsgno: 629, oddsgname: "\u7b2c\u4e5d\u540d\u5927\u5c0f" }, { oddsgno: 630, oddsgname: "\u7b2c\u5341\u540d\u5927\u5c0f" }, { oddsgno: 631, oddsgname: "\u51a0\u519b\u9f99\u864e" }, { oddsgno: 632, oddsgname: "\u4e9a\u519b\u9f99\u864e" }, { oddsgno: 633, oddsgname: "\u7b2c\u4e09\u540d\u9f99\u864e" },
    { oddsgno: 634, oddsgname: "\u7b2c\u56db\u540d\u9f99\u864e" }, { oddsgno: 635, oddsgname: "\u7b2c\u4e94\u540d\u9f99\u864e" }, { oddsgno: 636, oddsgname: "\u51a0\u4e9a\u548c\u5355\u53cc" }, { oddsgno: 637, oddsgname: "\u51a0\u4e9a\u548c\u5927\u5c0f" }, { oddsgno: 638, oddsgname: "\u51a0\u4e9a\u548c" }, { oddsgno: 701, oddsgname: "\u5927\u5c0f" }, { oddsgno: 702, oddsgname: "\u4e09\u519b" }, { oddsgno: 703, oddsgname: "\u56f4\u9ab0" }, { oddsgno: 704, oddsgname: "\u5168\u9ab0" }, { oddsgno: 705, oddsgname: "\u70b9\u6570" }, { oddsgno: 706, oddsgname: "\u957f\u724c" },
    { oddsgno: 707, oddsgname: "\u77ed\u724c" }, { oddsgno: 801, oddsgname: "\u6b63\u7801" }, { oddsgno: 802, oddsgname: "\u603b\u548c\u5927\u5c0f" }, { oddsgno: 803, oddsgname: "\u603b\u548c\u5355\u53cc" }, { oddsgno: 804, oddsgname: "\u603b\u548c810" }, { oddsgno: 805, oddsgname: "\u603b\u548c\u8fc7\u5173" }, { oddsgno: 806, oddsgname: "\u524d\u540e\u548c" }, { oddsgno: 807, oddsgname: "\u5355\u53cc\u548c" }, { oddsgno: 808, oddsgname: "\u4e94\u884c" }]
}, tool = {
    arrayIndex: function (a, b, c, d, e, f, g) {
        try {
            void 0 == d && (d = 0); void 0 == e && (e = a.length - 1); void 0 == f &&
            (f = 0); if (0 > e || d > e || a.length < e || b.length != c.length || b.length < f) return -1; void 0 == g && (g = d + parseInt((e - d) / 2, 10)); var h = "" == b[f] ? a[g] : a[g][b[f]]; var k = c[f]; if (h == k) return b.length - 1 == f ? g : this.arrayIndex(a, b, c, d, e, f + 1, g); h < k ? d = d < g ? g + 1 : d + 1 : e = e > g ? g - 1 : e - 1; return this.arrayIndex(a, b, c, d, e)
        } catch (l) { }
    }, getJSON: function (a, b, c) { b = this.arrayIndex(a, b.toString().split(","), c.toString().split(",")); return -1 == b ? null : a[b] }
}, OC = {
    divid: "", data: [], index: 0, showNumber: 4, param: { l1agentno: null, l2agentno: null }, init: function (a) {
        this.divid =
        a; OC.AsyncParam(function (a) { 1 == Number(a[1]) ? (OC.initHtml(), OC.param.l1agentno = a[0][0], OC.param.l2agentno = a[0][1], OC.bindEvent(), OC.readerODiff(), OC.runMove()) : $("#" + OC.divid).html("") })
    }, initHtml: function () {
        var a = []; a.push('<p id="oc_left">'); a.push('<a href="javascript:void(0)" id="oddsshow"></a>'); a.push("</p>"); a.push('<span id="oc_right">'); a.push('<a href="javascript:void(0)" class="odds-c oc-up" title="\u9ede\u64ca\u5411\u4e0a\u986f\u793a\u6700\u65b0\u8b8a\u5316\u7684\u8ce0\u7387" id="oddsup">&nbsp;</a>');
        a.push('<a href="javascript:void(0)" class="odds-c oc-down" title="\u9ede\u64ca\u5411\u4e0b\u986f\u793a\u6700\u65b0\u8b8a\u5316\u7684\u8ce0\u7387" id="oddsdown">&nbsp;</a>'); a.push("</span>"); $("#" + this.divid).html(a.join(""))
    }, _handler_odds: null, readerODiff: function () { OC.getOddsDiff(); null != this._handler_odds && (window.clearInterval(this._handler_odds), this._handler_odds = null); this._handler_odds = window.setInterval(function () { OC.getOddsDiff() }, 2E4) }, getOddsDiff: function () {
        OC.AsyncOddsDiff(OC.param.l1agentno,
        OC.param.l2agentno, function (a) { if ("" != a && null != a) { var b = []; a = a.split(";"); for (var c = 0; c < a.length; c++) for (var d = a[c].split(","), e = 0; e < DB.game.length; e++) if (d[0] == DB.game[e].ggno) { var f = tool.getJSON(DB.game, "gno", d[0]).gname; if (void 0 != tool.getJSON(DB.oddsgroup, "oddsgno", d[1])) { var g = tool.getJSON(DB.oddsgroup, "oddsgno", d[1]).oddsgname; b.push(f + "|" + g + "|" + d[2] + "|" + parseFloat(d[3]).toString()) } } OC.data = b } else OC.data = [] })
    }, AsyncParam: function (a) {
        MyAjax(!0, OC.getRootPath("/app/ws_odds.asmx/GetL1L2no"),
        "", function (b) { b = parseJSON(b.d); null != b && void 0 != a && a(b) }, function () { })
    }, AsyncOddsDiff: function (a, b, c) { MyAjax(!0, OC.getRootPath("/app/ws_odds.asmx/OddsChange"), '{l1agentno:"' + a + '",l2agentno:"' + b + '"}', function (a) { a = a.d; void 0 != c && c(a) }, function () { void 0 != c && c("") }) }, show: function (a) {
        var b = this.showNumber; b = this.data.slice(b * a, b * (a + 1)); for (var c = [], d, e = 0, f = b.length; e < f; e++) d = b[e].split("|"), c.push("<span class='oc_red'>" + d[0] + "\uff1a" + d[1] + "&nbsp;" + d[2] + "</span><span class='oc_blue'>" + d[3] + "</span>");
        $("#oddsshow").html(c.join("|")).css("top", 0); this.index = a
    }, getlastIndex: function () { var a = this.data.length, b = this.showNumber; return 0 == a ? 0 : 0 == a % b ? a / b - 1 : Math.floor(a / b) }, move: function (a) { var b = this.index, c = this.getlastIndex(), d = this; "up" == a ? (b = 0 == b ? c : b - 1, a = -20) : (b = b != c ? b + 1 : 0, a = 20); $("#oddsshow").animate({ top: a }, function () { d.show(b) }) }, createTable: function (a) {
        var b = a.length, c = ['<table class="tbline" style="width:100%; text-align:center;"><tr><th>\u5e8f\u53f7</th><th>\u5f69\u79cd</th><th>\u73a9\u6cd5</th><th>\u7403\u53f7</th><th>\u8d54\u7387</th><th>\u5e8f\u53f7</th><th>\u5f69\u79cd</th><th>\u73a9\u6cd5</th><th>\u7403\u53f7</th><th>\u8d54\u7387</th></tr>'];
        if (0 < b) for (var d = 0; d < b; d++) { var e = a[d].split("|"); 0 == d % 2 ? c.push("<tr><td>" + (d + 1) + "</td><td>" + e[0] + "</td><td>" + e[1] + "</td><td>" + e[2] + "</td><td>" + e[3] + "</td>" + (d == b - 1 ? '<td colspan="5">&nbsp;</td></tr>' : "")) : c.push("<td>" + (d + 1) + "</td><td>" + e[0] + "</td><td>" + e[1] + "</td><td>" + e[2] + "</td><td>" + e[3] + "</td></tr>") } c.push("</table>"); return c.join("")
    }, alert: function () { hwProwin.win({ message: this.createTable(this.data), title: "\u8d54\u7387\u53d8\u5316", iframe: !1, maxBtn: !1, width: 720, height: 280, draggable: !1 }) },
    setNumber: function () { var a = $("#" + this.divid), b = $("#oc_left"); a = a.width(); var c = $("#oc_right").width() + 30; a -= c; b.width(a); this.showNumber = Math.floor(a / 180) }, _handler_move: null, runMove: function () { this.stopMove(); OC.move("up"); this._handler_move = window.setInterval(function () { OC.move("up") }, 2E4) }, stopMove: function () { null != this._handler_move && (window.clearInterval(this._handler_move), this._handler_move = null) }, bindEvent: function () {
        var a = this; $("#oddsup").click(function () { a.move("up") }); $("#oddsdown").click(function () { a.move("down") });
        $("#oddsshow").click(function () { a.alert() }); $(window).resize(function () { a.setNumber(); a.show(0) }); a.setNumber()
    }, getRootPath: function (a) { var b = window.document.location.href, c = window.document.location.pathname, d = b.indexOf(c); b = b.substring(0, d); c = c.substring(0, c.substr(1).indexOf("/") + 1); return "/" == a.substr(0, 1) ? b + c + a : b + c + "/" + a }
};