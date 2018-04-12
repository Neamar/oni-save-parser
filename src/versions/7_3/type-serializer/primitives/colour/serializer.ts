
import {
    TypeDescriptor,
    TypeID
} from "../../interfaces";

import {
    TypeSerializationInfo
} from "../../services";


import {
    createSimpleSerializationInfo
} from "../simple-serializer";


import {
    Colour
} from "./interfaces";

import {
    ColourTypeDescriptor
} from "./descriptor";


export const ColourTypeSerializer = createSimpleSerializationInfo<Colour, ColourTypeDescriptor>(
    TypeID.Colour,
    "colour",
    reader => ({
        r: reader.readByte() / 255,
        g: reader.readByte() / 255,
        b: reader.readByte() / 255,
        a: reader.readByte() / 255,
    }),
    (writer, value) => {
        writer.writeByte(fracToByte(value.r));
        writer.writeByte(fracToByte(value.g));
        writer.writeByte(fracToByte(value.b));
        writer.writeByte(fracToByte(value.a));
    }
);

function fracToByte(num: number): number {
    const byte = Math.round(num * 255);
    if (byte < 0) return 0;
    if (byte > 255) return 255;

    return byte;
}