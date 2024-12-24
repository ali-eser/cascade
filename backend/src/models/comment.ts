import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
  tableName: 'comments', // Use plural table name
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
    type: DataType.STRING,
    allowNull: false
  })
  username!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  userId!: number;
}

export default Comment;