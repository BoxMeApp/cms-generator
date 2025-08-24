const a = `
import 'package:freezed_annotation/freezed_annotation.dart';

part 'a.freezed.dart';

@freezed
sealed class A with _$A {
}
`;

const s = `
import 'package:freezed_annotation/freezed_annotation.dart';

part 's.freezed.dart';

@freezed
sealed class S with _$S {
  const factory S.zero() = Zero;
}
`;

const cms = `
import 'package:cms/cms.dart';

import 's.dart';
import 'a.dart';

export 's.dart';
export 'a.dart';

class M extends Cms<S, A> {
  M() : super(const Zero()) ;
  @override
  Future<S> kernel(S s, A a) async => switch ((s, a)) {
    _ => undefined(s, a),
  };
}
`;

export {
    a,
    s,
    cms
}