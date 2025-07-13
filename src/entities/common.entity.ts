import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CommonEntity extends BaseEntity {
    @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
    updatedAt!: Date;
}
