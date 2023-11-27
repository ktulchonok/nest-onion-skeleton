import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IItem } from '@domain/entities';

export type ItemDocument = HydratedDocument<IItem>;

@Schema()
export class Item {
  @Prop()
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
