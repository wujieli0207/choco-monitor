import { Column, PrimaryColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryColumn('bigint')
  id!: string;

  @Column({
    name: 'is_deleted',
    comment: '是否删除(0: 未删除，1: 已删除)',
    unsigned: true,
    default: () => false,
  })
  isDeleted!: boolean;

  @Column('bigint', {
    name: 'create_by',
    comment: '创建人',
  })
  createBy!: string;

  @Column('bigint', {
    name: 'update_by',
    comment: '更新人',
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
