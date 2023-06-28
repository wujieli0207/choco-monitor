import { Module } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { MonitorController } from './monitor.controller';
import { MonitorEntity } from './entities/monitor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MonitorEntity])],
  controllers: [MonitorController],
  providers: [MonitorService],
})
export class MonitorModule {}
