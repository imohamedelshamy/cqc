import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { Course } from './course';

@Module({
  controllers: [CourseController],
  providers: [Course]
})
export class CourseModule {}
