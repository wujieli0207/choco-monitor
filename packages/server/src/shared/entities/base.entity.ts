import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: '主键',
  })
  id!: string;

  @Column({
    name: 'is_deleted',
    comment: '是否删除(0: 未删除，1: 已删除)',
    unsigned: true,
    default: () => false,
  })
  isDeleted!: boolean;

  @Column({
    name: 'create_by',
    comment: '创建人',
    length: 255,
    nullable: true,
  })
  createBy!: string;

  @Column({
    name: 'update_by',
    comment: '更新人',
    length: 255,
    nullable: true,
  })
  updateBy!: string;

  @Column('timestamp', {
    name: 'created_at',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

  @Column('timestamp', {
    name: 'updated_at',
    comment: '更新时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt!: Date;
}
