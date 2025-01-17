/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "bytebase.store";

export interface DataSourceOptions {
  /** srv is a boolean flag that indicates whether the host is a DNS SRV record. */
  srv: boolean;
  /** authentication_database is the database name to authenticate against, which stores the user credentials. */
  authenticationDatabase: string;
  /** sid and service_name are used for Oracle. */
  sid: string;
  serviceName: string;
  /**
   * SSH related
   * The hostname of the SSH server agent.
   */
  sshHost: string;
  /** The port of the SSH server agent. It's 22 typically. */
  sshPort: string;
  /** The user to login the server. */
  sshUser: string;
  /** The password to login the server. If it's empty string, no password is required. */
  sshObfuscatedPassword: string;
  /** The private key to login the server. If it's empty string, we will use the system default private key from os.Getenv("SSH_AUTH_SOCK"). */
  sshObfuscatedPrivateKey: string;
  /**
   * PKCS#8 private key in PEM format. If it's empty string, no private key is required.
   * Used for authentication when connecting to the data source.
   */
  authenticationPrivateKeyObfuscated: string;
}

function createBaseDataSourceOptions(): DataSourceOptions {
  return {
    srv: false,
    authenticationDatabase: "",
    sid: "",
    serviceName: "",
    sshHost: "",
    sshPort: "",
    sshUser: "",
    sshObfuscatedPassword: "",
    sshObfuscatedPrivateKey: "",
    authenticationPrivateKeyObfuscated: "",
  };
}

export const DataSourceOptions = {
  encode(message: DataSourceOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srv === true) {
      writer.uint32(8).bool(message.srv);
    }
    if (message.authenticationDatabase !== "") {
      writer.uint32(18).string(message.authenticationDatabase);
    }
    if (message.sid !== "") {
      writer.uint32(26).string(message.sid);
    }
    if (message.serviceName !== "") {
      writer.uint32(34).string(message.serviceName);
    }
    if (message.sshHost !== "") {
      writer.uint32(42).string(message.sshHost);
    }
    if (message.sshPort !== "") {
      writer.uint32(50).string(message.sshPort);
    }
    if (message.sshUser !== "") {
      writer.uint32(58).string(message.sshUser);
    }
    if (message.sshObfuscatedPassword !== "") {
      writer.uint32(66).string(message.sshObfuscatedPassword);
    }
    if (message.sshObfuscatedPrivateKey !== "") {
      writer.uint32(74).string(message.sshObfuscatedPrivateKey);
    }
    if (message.authenticationPrivateKeyObfuscated !== "") {
      writer.uint32(82).string(message.authenticationPrivateKeyObfuscated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.srv = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.authenticationDatabase = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sid = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.serviceName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sshHost = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sshPort = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sshUser = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sshObfuscatedPassword = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sshObfuscatedPrivateKey = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.authenticationPrivateKeyObfuscated = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceOptions {
    return {
      srv: isSet(object.srv) ? globalThis.Boolean(object.srv) : false,
      authenticationDatabase: isSet(object.authenticationDatabase)
        ? globalThis.String(object.authenticationDatabase)
        : "",
      sid: isSet(object.sid) ? globalThis.String(object.sid) : "",
      serviceName: isSet(object.serviceName) ? globalThis.String(object.serviceName) : "",
      sshHost: isSet(object.sshHost) ? globalThis.String(object.sshHost) : "",
      sshPort: isSet(object.sshPort) ? globalThis.String(object.sshPort) : "",
      sshUser: isSet(object.sshUser) ? globalThis.String(object.sshUser) : "",
      sshObfuscatedPassword: isSet(object.sshObfuscatedPassword) ? globalThis.String(object.sshObfuscatedPassword) : "",
      sshObfuscatedPrivateKey: isSet(object.sshObfuscatedPrivateKey)
        ? globalThis.String(object.sshObfuscatedPrivateKey)
        : "",
      authenticationPrivateKeyObfuscated: isSet(object.authenticationPrivateKeyObfuscated)
        ? globalThis.String(object.authenticationPrivateKeyObfuscated)
        : "",
    };
  },

  toJSON(message: DataSourceOptions): unknown {
    const obj: any = {};
    if (message.srv === true) {
      obj.srv = message.srv;
    }
    if (message.authenticationDatabase !== "") {
      obj.authenticationDatabase = message.authenticationDatabase;
    }
    if (message.sid !== "") {
      obj.sid = message.sid;
    }
    if (message.serviceName !== "") {
      obj.serviceName = message.serviceName;
    }
    if (message.sshHost !== "") {
      obj.sshHost = message.sshHost;
    }
    if (message.sshPort !== "") {
      obj.sshPort = message.sshPort;
    }
    if (message.sshUser !== "") {
      obj.sshUser = message.sshUser;
    }
    if (message.sshObfuscatedPassword !== "") {
      obj.sshObfuscatedPassword = message.sshObfuscatedPassword;
    }
    if (message.sshObfuscatedPrivateKey !== "") {
      obj.sshObfuscatedPrivateKey = message.sshObfuscatedPrivateKey;
    }
    if (message.authenticationPrivateKeyObfuscated !== "") {
      obj.authenticationPrivateKeyObfuscated = message.authenticationPrivateKeyObfuscated;
    }
    return obj;
  },

  create(base?: DeepPartial<DataSourceOptions>): DataSourceOptions {
    return DataSourceOptions.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataSourceOptions>): DataSourceOptions {
    const message = createBaseDataSourceOptions();
    message.srv = object.srv ?? false;
    message.authenticationDatabase = object.authenticationDatabase ?? "";
    message.sid = object.sid ?? "";
    message.serviceName = object.serviceName ?? "";
    message.sshHost = object.sshHost ?? "";
    message.sshPort = object.sshPort ?? "";
    message.sshUser = object.sshUser ?? "";
    message.sshObfuscatedPassword = object.sshObfuscatedPassword ?? "";
    message.sshObfuscatedPrivateKey = object.sshObfuscatedPrivateKey ?? "";
    message.authenticationPrivateKeyObfuscated = object.authenticationPrivateKeyObfuscated ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
