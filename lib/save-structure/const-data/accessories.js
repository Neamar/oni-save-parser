"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCESSORY_ID_PREFIX = "Root.Accessories.";
exports.ACCESSORY_TYPES = [
    "hat",
    "hat_hair",
    "hair_always",
    "hair",
    "headshape",
    "eyes",
    "mouth",
    "neck",
    "body",
    "arm"
];
exports.ACCESSORY_EYE_NAMES = [
    "eyes_001",
    "eyes_002",
    "eyes_003",
    "eyes_004",
    "eyes_005"
];
exports.ACCESSORY_HEAD_NAMES = [
    "headshape_001",
    "headshape_002",
    "headshape_003",
    "headshape_004"
];
exports.ACCESSORY_MOUTH_NAMES = [
    "mouth_001",
    "mouth_002",
    "mouth_003",
    "mouth_004"
];
exports.ACCESSORY_HAIR_NAMES = [
    "hair_001",
    "hair_002",
    "hair_003",
    "hair_004",
    "hair_005",
    "hair_006",
    "hair_007",
    "hair_008",
    "hair_009",
    "hair_010",
    "hair_011",
    "hair_012",
    "hair_013",
    "hair_014",
    "hair_015",
    "hair_016",
    "hair_017",
    "hair_018",
    "hair_019",
    "hair_020",
    "hair_021",
    "hair_022",
    "hair_023",
    "hair_027",
    "hair_028",
    "hair_029",
    "hair_030",
    "hair_031",
    "hair_032",
    "hair_033"
];
exports.ACCESSORY_BODY_NAMES = [
    "body_001",
    "body_002",
    "body_003",
    "body_004"
];
function Accessory(name) {
    let target = (new.target || {});
    target.guid = {
        Guid: makeAccessoryID(name)
    };
    return target;
}
exports.Accessory = Accessory;
function getIndexOfAccessoryType(accessories, type) {
    return accessories.findIndex(acc => {
        const accType = getAccessoryType(acc);
        return type === accType;
    });
}
exports.getIndexOfAccessoryType = getIndexOfAccessoryType;
function getAccessoryType(accessory) {
    const guid = accessoryToGuid(accessory);
    if (!guid.startsWith(exports.ACCESSORY_ID_PREFIX)) {
        return null;
    }
    const id = guid.substr(exports.ACCESSORY_ID_PREFIX.length);
    // Determining the type is a bit problematic, as we have
    //  some types that are prefixes of other types.
    // The game itself can resolve this as it looks up
    //  exact matches, but we need to be able to handle
    //  values we are not aware of.
    // Below is an attempt at a solution in which we find the longest
    //  matching type
    return exports.ACCESSORY_TYPES.reduce((matchType, type) => {
        if (id.startsWith(type + "_") &&
            (matchType == null || type.length > matchType.length)) {
            return type;
        }
        return matchType;
    }, null);
}
exports.getAccessoryType = getAccessoryType;
function getAccessoryName(accessory) {
    const guid = accessoryToGuid(accessory);
    if (!guid.startsWith(exports.ACCESSORY_ID_PREFIX)) {
        return null;
    }
    return guid.substr(exports.ACCESSORY_ID_PREFIX.length);
}
exports.getAccessoryName = getAccessoryName;
function makeAccessoryID(name) {
    return `${exports.ACCESSORY_ID_PREFIX}${name}`;
}
exports.makeAccessoryID = makeAccessoryID;
function getAccessoryOfType(accessories, type) {
    const index = getIndexOfAccessoryType(accessories, type);
    if (index === -1)
        return null;
    return accessories[index];
}
exports.getAccessoryOfType = getAccessoryOfType;
function accessoryToGuid(accessory) {
    if (typeof accessory === "string") {
        return accessory;
    }
    return accessory.guid.Guid;
}
//# sourceMappingURL=accessories.js.map