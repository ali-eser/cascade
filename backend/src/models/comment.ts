import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'comments',
  timestamps: true,
  underscored: true
})
class Comment extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  text!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  itemId!: number;
}

export default Comment;