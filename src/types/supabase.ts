/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/Course": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Course.id"];
          name?: parameters["rowFilter.Course.name"];
          dayOfWeek?: parameters["rowFilter.Course.dayOfWeek"];
          time?: parameters["rowFilter.Course.time"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Course"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Course */
          Course?: definitions["Course"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Course.id"];
          name?: parameters["rowFilter.Course.name"];
          dayOfWeek?: parameters["rowFilter.Course.dayOfWeek"];
          time?: parameters["rowFilter.Course.time"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Course.id"];
          name?: parameters["rowFilter.Course.name"];
          dayOfWeek?: parameters["rowFilter.Course.dayOfWeek"];
          time?: parameters["rowFilter.Course.time"];
        };
        body: {
          /** Course */
          Course?: definitions["Course"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/Register": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Register.id"];
          studentId?: parameters["rowFilter.Register.studentId"];
          courseId?: parameters["rowFilter.Register.courseId"];
          createdAt?: parameters["rowFilter.Register.createdAt"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Register"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Register */
          Register?: definitions["Register"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Register.id"];
          studentId?: parameters["rowFilter.Register.studentId"];
          courseId?: parameters["rowFilter.Register.courseId"];
          createdAt?: parameters["rowFilter.Register.createdAt"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Register.id"];
          studentId?: parameters["rowFilter.Register.studentId"];
          courseId?: parameters["rowFilter.Register.courseId"];
          createdAt?: parameters["rowFilter.Register.createdAt"];
        };
        body: {
          /** Register */
          Register?: definitions["Register"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/Student": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Student.id"];
          name?: parameters["rowFilter.Student.name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Student"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Student */
          Student?: definitions["Student"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Student.id"];
          name?: parameters["rowFilter.Student.name"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.Student.id"];
          name?: parameters["rowFilter.Student.name"];
        };
        body: {
          /** Student */
          Student?: definitions["Student"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/_prisma_migrations": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter._prisma_migrations.id"];
          checksum?: parameters["rowFilter._prisma_migrations.checksum"];
          finished_at?: parameters["rowFilter._prisma_migrations.finished_at"];
          migration_name?: parameters["rowFilter._prisma_migrations.migration_name"];
          logs?: parameters["rowFilter._prisma_migrations.logs"];
          rolled_back_at?: parameters["rowFilter._prisma_migrations.rolled_back_at"];
          started_at?: parameters["rowFilter._prisma_migrations.started_at"];
          applied_steps_count?: parameters["rowFilter._prisma_migrations.applied_steps_count"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["_prisma_migrations"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** _prisma_migrations */
          _prisma_migrations?: definitions["_prisma_migrations"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter._prisma_migrations.id"];
          checksum?: parameters["rowFilter._prisma_migrations.checksum"];
          finished_at?: parameters["rowFilter._prisma_migrations.finished_at"];
          migration_name?: parameters["rowFilter._prisma_migrations.migration_name"];
          logs?: parameters["rowFilter._prisma_migrations.logs"];
          rolled_back_at?: parameters["rowFilter._prisma_migrations.rolled_back_at"];
          started_at?: parameters["rowFilter._prisma_migrations.started_at"];
          applied_steps_count?: parameters["rowFilter._prisma_migrations.applied_steps_count"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter._prisma_migrations.id"];
          checksum?: parameters["rowFilter._prisma_migrations.checksum"];
          finished_at?: parameters["rowFilter._prisma_migrations.finished_at"];
          migration_name?: parameters["rowFilter._prisma_migrations.migration_name"];
          logs?: parameters["rowFilter._prisma_migrations.logs"];
          rolled_back_at?: parameters["rowFilter._prisma_migrations.rolled_back_at"];
          started_at?: parameters["rowFilter._prisma_migrations.started_at"];
          applied_steps_count?: parameters["rowFilter._prisma_migrations.applied_steps_count"];
        };
        body: {
          /** _prisma_migrations */
          _prisma_migrations?: definitions["_prisma_migrations"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  Course: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name: string;
    /** Format: integer */
    dayOfWeek: number;
    /** Format: text */
    time: string;
  };
  Register: {
    /**
     * Format: integer
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `Student.id`.<fk table='Student' column='id'/>
     */
    studentId: string;
    /**
     * Format: integer
     * @description Note:
     * This is a Foreign Key to `Course.id`.<fk table='Course' column='id'/>
     */
    courseId: number;
    /**
     * Format: timestamp without time zone
     * @default CURRENT_TIMESTAMP
     */
    createdAt: string;
  };
  Student: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    name: string;
  };
  _prisma_migrations: {
    /**
     * Format: character varying
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: character varying */
    checksum: string;
    /** Format: timestamp with time zone */
    finished_at?: string;
    /** Format: character varying */
    migration_name: string;
    /** Format: text */
    logs?: string;
    /** Format: timestamp with time zone */
    rolled_back_at?: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    started_at: string;
    /** Format: integer */
    applied_steps_count: number;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description Course */
  "body.Course": definitions["Course"];
  /** Format: integer */
  "rowFilter.Course.id": string;
  /** Format: text */
  "rowFilter.Course.name": string;
  /** Format: integer */
  "rowFilter.Course.dayOfWeek": string;
  /** Format: text */
  "rowFilter.Course.time": string;
  /** @description Register */
  "body.Register": definitions["Register"];
  /** Format: integer */
  "rowFilter.Register.id": string;
  /** Format: uuid */
  "rowFilter.Register.studentId": string;
  /** Format: integer */
  "rowFilter.Register.courseId": string;
  /** Format: timestamp without time zone */
  "rowFilter.Register.createdAt": string;
  /** @description Student */
  "body.Student": definitions["Student"];
  /** Format: uuid */
  "rowFilter.Student.id": string;
  /** Format: text */
  "rowFilter.Student.name": string;
  /** @description _prisma_migrations */
  "body._prisma_migrations": definitions["_prisma_migrations"];
  /** Format: character varying */
  "rowFilter._prisma_migrations.id": string;
  /** Format: character varying */
  "rowFilter._prisma_migrations.checksum": string;
  /** Format: timestamp with time zone */
  "rowFilter._prisma_migrations.finished_at": string;
  /** Format: character varying */
  "rowFilter._prisma_migrations.migration_name": string;
  /** Format: text */
  "rowFilter._prisma_migrations.logs": string;
  /** Format: timestamp with time zone */
  "rowFilter._prisma_migrations.rolled_back_at": string;
  /** Format: timestamp with time zone */
  "rowFilter._prisma_migrations.started_at": string;
  /** Format: integer */
  "rowFilter._prisma_migrations.applied_steps_count": string;
}

export interface operations {}

export interface external {}