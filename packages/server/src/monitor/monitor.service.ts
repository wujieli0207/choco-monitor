import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MonitorEntity } from './entities/monitor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IResultCountRo } from 'common/types/http';

@Injectable()
export class MonitorService {
  constructor(
    @InjectRepository(MonitorEntity)
    private readonly MonitorRepository: Repository<MonitorEntity>,
  ) {}

  async create(monitor: Partial<MonitorEntity>): Promise<MonitorEntity> {
    console.log('Service monitor: ', monitor);
    return await this.MonitorRepository.save(monitor);
  }

  async getAll(): Promise<IResultCountRo<MonitorEntity>> {
    const [content, count] = await this.MonitorRepository.findAndCount();
    return { content, count };
  }

  async getErrorById(id: string): Promise<MonitorEntity> {
    return await this.MonitorRepository.findOne({
      where: {
        id,
      },
    });
  }
}
