//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

Calculator_ping_args = function(args) {
};
Calculator_ping_args.prototype = {};
Calculator_ping_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_ping_args.prototype.write = function(output) {
  output.writeStructBegin('Calculator_ping_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_ping_result = function(args) {
};
Calculator_ping_result.prototype = {};
Calculator_ping_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_ping_result.prototype.write = function(output) {
  output.writeStructBegin('Calculator_ping_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_add_args = function(args) {
  this.num1 = null;
  this.num2 = null;
  if (args) {
    if (args.num1 !== undefined) {
      this.num1 = args.num1;
    }
    if (args.num2 !== undefined) {
      this.num2 = args.num2;
    }
  }
};
Calculator_add_args.prototype = {};
Calculator_add_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.num1 = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.num2 = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_add_args.prototype.write = function(output) {
  output.writeStructBegin('Calculator_add_args');
  if (this.num1) {
    output.writeFieldBegin('num1', Thrift.Type.I32, 1);
    output.writeI32(this.num1);
    output.writeFieldEnd();
  }
  if (this.num2) {
    output.writeFieldBegin('num2', Thrift.Type.I32, 2);
    output.writeI32(this.num2);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_add_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
Calculator_add_result.prototype = {};
Calculator_add_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_add_result.prototype.write = function(output) {
  output.writeStructBegin('Calculator_add_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_calculate_args = function(args) {
  this.logid = null;
  this.w = null;
  if (args) {
    if (args.logid !== undefined) {
      this.logid = args.logid;
    }
    if (args.w !== undefined) {
      this.w = args.w;
    }
  }
};
Calculator_calculate_args.prototype = {};
Calculator_calculate_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.logid = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.w = new Work();
        this.w.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_calculate_args.prototype.write = function(output) {
  output.writeStructBegin('Calculator_calculate_args');
  if (this.logid) {
    output.writeFieldBegin('logid', Thrift.Type.I32, 1);
    output.writeI32(this.logid);
    output.writeFieldEnd();
  }
  if (this.w) {
    output.writeFieldBegin('w', Thrift.Type.STRUCT, 2);
    this.w.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_calculate_result = function(args) {
  this.success = null;
  this.ouch = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ouch !== undefined) {
      this.ouch = args.ouch;
    }
  }
};
Calculator_calculate_result.prototype = {};
Calculator_calculate_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ouch = new InvalidOperation();
        this.ouch.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_calculate_result.prototype.write = function(output) {
  output.writeStructBegin('Calculator_calculate_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  if (this.ouch) {
    output.writeFieldBegin('ouch', Thrift.Type.STRUCT, 1);
    this.ouch.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_zip_args = function(args) {
};
Calculator_zip_args.prototype = {};
Calculator_zip_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_zip_args.prototype.write = function(output) {
  output.writeStructBegin('Calculator_zip_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Calculator_zip_result = function(args) {
};
Calculator_zip_result.prototype = {};
Calculator_zip_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Calculator_zip_result.prototype.write = function(output) {
  output.writeStructBegin('Calculator_zip_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CalculatorClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
Thrift.inherits(CalculatorClient, SharedServiceClient)
CalculatorClient.prototype.ping = function() {
  this.send_ping();
  this.recv_ping();
};

CalculatorClient.prototype.send_ping = function() {
  this.output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid);
  var args = new Calculator_ping_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

CalculatorClient.prototype.recv_ping = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Calculator_ping_result();
  result.read(this.input);
  this.input.readMessageEnd();

  return;
};
CalculatorClient.prototype.add = function(num1, num2) {
  this.send_add(num1, num2);
  return this.recv_add();
};

CalculatorClient.prototype.send_add = function(num1, num2) {
  this.output.writeMessageBegin('add', Thrift.MessageType.CALL, this.seqid);
  var args = new Calculator_add_args();
  args.num1 = num1;
  args.num2 = num2;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

CalculatorClient.prototype.recv_add = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Calculator_add_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'add failed: unknown result';
};
CalculatorClient.prototype.calculate = function(logid, w) {
  this.send_calculate(logid, w);
  return this.recv_calculate();
};

CalculatorClient.prototype.send_calculate = function(logid, w) {
  this.output.writeMessageBegin('calculate', Thrift.MessageType.CALL, this.seqid);
  var args = new Calculator_calculate_args();
  args.logid = logid;
  args.w = w;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

CalculatorClient.prototype.recv_calculate = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new Calculator_calculate_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.ouch) {
    throw result.ouch;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'calculate failed: unknown result';
};
CalculatorClient.prototype.zip = function() {
  this.send_zip();
};

CalculatorClient.prototype.send_zip = function() {
  this.output.writeMessageBegin('zip', Thrift.MessageType.CALL, this.seqid);
  var args = new Calculator_zip_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};
