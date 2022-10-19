@extends('admin.nowa.views.layouts.app')

@section('styles')



@endsection

@section('content')



    <!-- breadcrumb -->
    <div class="breadcrumb-header justify-content-between">
        <div class="left-content">
            <span class="main-content-title mg-b-0 mg-b-lg-1">@lang('admin.users')</span>
        </div>

    </div>
    <!-- /breadcrumb -->

    <!-- row opened -->
    <div class="row row-sm">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header pb-0">



                    {{--<p class="tx-12 tx-gray-500 mb-2">Example of Nowa Simple Table. <a href="">Learn more</a></p>--}}
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <form class="mr-0 p-0">
                            <table class="table mg-b-0 text-md-nowrap">
                                <thead>
                                <tr>
                                    <th>@lang('admin.id')</th>
                                    <th>@lang('admin.edited_user_id')</th>
                                    <th>@lang('admin.role')</th>
                                    <th>@lang('admin.email')</th>
                                    {{--<th>@lang('admin.phone')</th>--}}
                                    {{--<th>@lang('admin.name')</th>--}}
                                    {{--<th>@lang('admin.original')</th>--}}
                                    <th>@lang('admin.updated')</th>
                                    <th>@lang('admin.date')</th>

                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <th>
                                        <input class="form-control" type="number" name="id" onchange="this.form.submit()"
                                               value="{{Request::get('id')}}"
                                               class="validate {{$errors->has('id') ? '' : 'valid'}}">
                                    </th>
                                    <th>
                                        <input class="form-control" type="text" name="email" onchange="this.form.submit()"
                                               value="{{Request::get('email')}}"
                                               class="validate {{$errors->has('email') ? '' : 'valid'}}">
                                    </th>
                                    <th></th>


                                @if($data)
                                    @foreach($data as $user)
                                        <?php



                                        $balance_o = (array)json_decode($user->balance_original,true);
                                        $wallet_o = (array)json_decode($user->wallet_original,true);
                                        $balance_u = (array)json_decode($user->balance_updated,true);
                                        $wallet_u = (array)json_decode($user->wallet_updated,true);


                                        $balance_text = "Balance\n\r";
                                        if(count($balance_o) <= count($balance_u)){
                                            foreach ($balance_u as $key => $bu){
                                                if(isset($balance_o[$key])){
                                                    if($balance_o[$key] !== $bu) $balance_text .= $key . " updated from " . $balance_o[$key] . " to " . $bu ."\n\r";
                                                } else {
                                                    $balance_text .= "added : " . $key . " - " . $bu ."\n\r";
                                                }
                                            }
                                        } else {
                                            foreach ($balance_o as $key => $bo){
                                                if(isset($balance_u[$key])){
                                                    if($balance_u[$key] !== $bo) $balance_text .= $key . " updated from " . $bo . " to " . $balance_u[$key] ."\n\r";
                                                } else {
                                                    $balance_text .= "deleted : " . $key . " - " . $bo ."\n\r";
                                                }
                                            }
                                        }


                                        $wallet_text = "Wallet\n\r";
                                        if(count($wallet_o) <= count($wallet_u)){
                                            foreach ($wallet_u as $key => $wu){
                                                if(isset($wallet_o[$key])){
                                                    if($wallet_o[$key] !== $wu) $wallet_text .= $key . " updated from " . $wallet_o[$key] . " to " . $wu ."\n\r";
                                                } else {
                                                    $wallet_text .= "added : " . $key . " - " . $wu ."\n\r";
                                                }
                                            }
                                        } else {
                                            foreach ($wallet_o as $key => $wo){
                                                if(isset($wallet_u[$key])){
                                                    if($wallet_u[$key] !== $wo) $wallet_text .= $key . " updated from " . $wo . " to " . $wallet_u[$key] ."\n\r";
                                                } else {
                                                    $wallet_text .= "deleted : " . $key . " - " . $wo ."\n\r";
                                                }
                                            }
                                        }

                                        //dd($balance_text,$balance_u,$balance_o,$wallet_u,$wallet_o);

                                        $original = (array)json_decode($user->fields_original,true);

                                        $fields = (array)json_decode($user->fields,true);
                                        if(array_key_exists('updated_at',$fields)){
                                            unset($fields['updated_at']);
                                        }

                                        $fields_text = "Fields\n\r";


                                        foreach($fields as $key => $field){
                                            $fields_text .= $key . " updated from " . $original[$key] . " to ". $field . "\n\r";
                                        }

                                        ?>
                                        <tr>
                                            <td>{{$user->id}}</td>
                                            <td><a href="{{route('user.edit',['user' => $user->edit_user_id])}}" >{{$user->edit_user_id}}</a></td>
                                            <td>{{$user->user_role}}</td>
                                            <td>{{$user->email}}</td>
                                            {{--<td>{{$user->phone}}</td>--}}
                                            {{--<td>
                                            {{$user->name}} {{$user->surname}}
                                            </td>--}}
                                            {{--<td><pre>{{$to}}</pre></td>--}}
                                            <td><pre>{{!$user->details ? $fields_text . $balance_text . $wallet_text:$user->details}}</pre></td>
                                            <td>{{$user->created_at}}
                                            </td>

                                            {{--<td>

                                                <a href="{{locale_route('user.destroy',$user->id)}}"
                                                   onclick="return confirm('Are you sure?')" class="pl-3">
                                                    <i class="fa fa-edit">Delete</i>
                                                </a>
                                            </td>--}}

                                        </tr>
                                    @endforeach
                                @endif


                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--/div-->

        {{ $data->appends(request()->input())->links('admin.vendor.pagination.material') }}
    </div>
    <!-- /row -->

@endsection

@section('scripts')



@endsection
