import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'shared/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('tbl_monitor_info')
export class MonitorEntity extends BaseEntity {
  @ApiProperty({ description: '记录错误发生的时间戳' })
  @Column({
    name: 'error_timestamp',
    type: 'timestamp',
    comment: '记录错误发生的时间戳',
  })
  errorTimestamp: Date;

  @ApiProperty({ description: '错误类型' })
  @Column({
    name: 'error_type',
    length: 255,
    comment: '错误类型，用于区分不同类型的错误',
  })
  errorType: string;

  @ApiProperty({ description: '错误消息或错误描述' })
  @Column({
    name: 'error_message',
    type: 'text',
    comment: '错误消息或错误描述',
  })
  errorMessage: string;

  @ApiProperty({ description: '错误堆栈跟踪信息' })
  @Column({ name: 'stack_trace', type: 'text', comment: '错误堆栈跟踪信息' })
  stackTrace: string;

  @ApiProperty({ description: '错误发生的页面 URL' })
  @Column({ name: 'url', length: 255, comment: '错误发生的页面 URL' })
  url: string;

  @ApiProperty({ description: '发生错误的用户 ID' })
  @Column({ name: 'user_id', nullable: true, comment: '发生错误的用户 ID' })
  userId: number;

  @ApiProperty({ description: '设备信息' })
  @Column({
    name: 'device_info',
    length: 255,
    comment: '设备信息，如浏览器类型、操作系统等',
  })
  deviceInfo: string;

  @ApiProperty({ description: '附加的错误相关信息' })
  @Column({
    name: 'additional_info',
    type: 'text',
    nullable: true,
    comment: '附加的错误相关信息',
  })
  additionalInfo: string;
}
