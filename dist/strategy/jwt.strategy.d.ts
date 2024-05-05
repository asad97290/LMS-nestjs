import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
declare const JwtAdminStrategy_base: new (...args: any[]) => any;
export declare class JwtAdminStrategy extends JwtAdminStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        photo: string;
        timezone: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
declare const JwtUserStrategy_base: new (...args: any[]) => any;
export declare class JwtUserStrategy extends JwtUserStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        photo: string;
        timezone: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
declare const JwtCombineStrategy_base: new (...args: any[]) => any;
export declare class JwtCombineStrategy extends JwtCombineStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        photo: string;
        timezone: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};