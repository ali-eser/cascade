import {Model, DataType, Table, Column, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { User } from "./user";

@Table({
    tableName: 'items',
    timestamps: true,
    underscored: true
})

export class Item extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    itemName!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true
    })
    description!: string;

    @Column({
        type: DataType.BLOB,
        allowNull: true
    })
    itemImage!: Buffer;

    @ForeignKey(() => User)

    @Column(DataType.INTEGER)
    userId!: number;

    @BelongsTo(() => User, { onDelete: 'CASCADE' })
    user!: User;
}