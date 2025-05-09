<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Display extends CI_Controller {

  public function index()
  {
    echo'<html><center><img src="/assets/img/dephub-udara.png" height="450px" style="padding-top: 100px;"></center></html>';
  }

  public function show($uid=null)
  {
    $q = $this->db->query('SELECT id, display_uid, change_id FROM fids_display WHERE display_uid="'.$uid.'" LIMIT 1;');
    $r = $q->first_row();
    $query = $this->db->query("SELECT banner_location FROM st_banner_data WHERE name='IDLE'")->first_row();
    if (!$query || empty($query)) {
      $err = '<HTML>
                    <HEAD>
                        <TITLE>FIDS</TITLE>
                        <STYLE>
                        html,body{
                            margin:0;
                            height:100%;
                        }
                        img{
                          display:block;
                          width:100%; height:100%;
                          object-fit: cover;
                        }
                        </STYLE>
                        <script src="/assets/local/jquery.min.js"></script>
                    </HEAD>
                    <BODY>
                        <input type="hidden" name="change_id" id="change_id" value="'.$r->change_id.'">
                        <input type="hidden" name="display_uid" id="display_uid" value="'.$uid.'">
                        <img src="/assets/img/blank.gif">
                        <!-- <img src="/assets/img/blank.jpg"> -->
                    </BODY>
                    <script>
                         var myFunction = function() {
                             var change_id = $("#change_id").val();
                             var display_uid = $("#display_uid").val();
                             $.get("/api/fids/checkdisplay/'.$uid.'", function(data){
                                 console.log(data["change_id"]);
                                 if(change_id !== data["change_id"]) {
                                     location.reload();
                                 }
                             });
                         };
                         setInterval(myFunction, 10000);
                     </script>
                </HTML>';
    } else {
      $extension = pathinfo($query->banner_location);
      if ($extension['extension'] === "png" || $extension['extension'] === "jpg" ||  $extension['extension'] === "jpeg" || $extension['extension'] === "gif")
      {
        $err = '<HTML>
                    <HEAD>
                        <TITLE>FIDS</TITLE>
                        <STYLE>
                        html,body{
                            margin:0;
                            height:100%;
                        }
                        img{
                          display:block;
                          width:100%; height:100%;
                          object-fit: cover;
                        }
                        </STYLE>
                        <script src="/assets/local/jquery.min.js"></script>
                    </HEAD>
                    <BODY>
                        <input type="hidden" name="change_id" id="change_id" value="'.$r->change_id.'">
                        <input type="hidden" name="display_uid" id="display_uid" value="'.$uid.'">
                        <img src="/assets/uploads/'. $query->banner_location .'">
                        <!-- <img src="/assets/img/blank.jpg"> -->
                    </BODY>
                    <script>
                         var myFunction = function() {
                             var change_id = $("#change_id").val();
                             var display_uid = $("#display_uid").val();
                             $.get("/api/fids/checkdisplay/'.$uid.'", function(data){
                                 console.log(data["change_id"]);
                                 if(change_id !== data["change_id"]) {
                                     location.reload();
                                 }
                             });
                         };
                         setInterval(myFunction, 10000);
                     </script>
                </HTML>';
      }

      if ($extension['extension'] === "mp4")
      {
        $err = '<HTML>
                    <HEAD>
                        <TITLE>FIDS</TITLE>
                        <STYLE>
                        html,body{
                            margin:0;
                            height:100%;
                        }
                        img{
                          display:block;
                          width:100%; height:100%;
                          object-fit: cover;
                        }

                        #video {
							object-fit: cover;
							width: 1920px;
							height: 1080px;
						}
                        </STYLE>
                        <script src="/assets/local/jquery.min.js"></script>
                    </HEAD>
                    <BODY>
                        <input type="hidden" name="change_id" id="change_id" value="'.$r->change_id.'">
                        <input type="hidden" name="display_uid" id="display_uid" value="'.$uid.'">


						  <video autoplay muted id="video">
							<source src="/assets/uploads/'. $query->banner_location .'" type="video/mp4">
						  	Your browser does not support the video tag.
						  </video>

                        <!-- <img src="/assets/img/blank.jpg"> -->
                    </BODY>
                    <script>
                         var myFunction = function() {
                             var change_id = $("#change_id").val();
                             var display_uid = $("#display_uid").val();
                             $.get("/api/fids/checkdisplay/'.$uid.'", function(data){
                                 console.log(data["change_id"]);
                                 if(change_id !== data["change_id"]) {
                                     location.reload();
                                 }
                             });
                         };
                         setInterval(myFunction, 10000);
                         $( window ).load(function() {
                             $( "#video" ).get(0).play();
                         })
                         $(document).ready(function() {
//                             $("#video").prop("play", true);
						 });
                     </script>
                </HTML>';
      }
    }

    if(!$uid) {
      echo $err;
    } else {
      $qCheckUID = $this->db->query('SELECT `type`, `type_name` FROM st_fids_display WHERE display_uid="'.$uid.'" LIMIT 1;');
      if ($qCheckUID->num_rows() > 0) {
        $rowDisplay = $qCheckUID->first_row();
        if (trim($rowDisplay->type) == 'COUNTER') {
          $qGetData = $this->db->query('  SELECT st_counter_data.*, da.file_logo FROM st_counter_data
								left join data_airlines da on st_counter_data.airlines = da.name
								WHERE st_counter_data.`name`="'.$rowDisplay->type_name.'"
								  AND schedule_date = DATE_FORMAT(NOW(),"%Y-%m-%d")
								  AND
									(
												DATE_FORMAT(NOW(),"%H:%i") > CONVERT(st_counter_data.start_time,TIME)
											AND
												DATE_FORMAT(NOW(),"%H:%i") < CONVERT(st_counter_data.end_time,TIME)

										)
								ORDER BY
									CONVERT(start_time,TIME)
										ASC LIMIT 1;
                                                ');

          if ($qGetData->num_rows() > 0) {
            $GetData = $qGetData->first_row();

            $img = '/assets/uploads/airliness/' . $GetData->file_logo;

            $data = array('err'=>'-','display'=>$GetData,'img'=>$img, 'display_uid'=>$uid, 'change_id'=>$r->change_id);
            $this->counter($data);
          } else {
            echo $err;
          }
        }
        else if (trim($rowDisplay->type) == 'GATE') {
          $qGetData = $this->db->query('
										SELECT st_gate_data.*, da.file_logo FROM st_gate_data
					left join data_airlines da on st_gate_data.airlines = da.name
					WHERE st_gate_data.`name`="'.$rowDisplay->type_name.'"
					  AND schedule_date = DATE_FORMAT(NOW(),"%Y-%m-%d")
					  AND
						(
									DATE_FORMAT(NOW(),"%H:%i") > CONVERT(st_gate_data.start_time,TIME)
								AND
									DATE_FORMAT(NOW(),"%H:%i") < CONVERT(st_gate_data.end_time,TIME)

							)
					ORDER BY
						CONVERT(start_time,TIME)
							ASC LIMIT 1;
                                                ');

          if ($qGetData->num_rows() > 0) {
            $GetData = $qGetData->first_row();

            $img = '/assets/uploads/airliness/' . $GetData->file_logo;

            $data = array('err'=>'-','display'=>$GetData,'img'=>$img, 'display_uid'=>$uid, 'change_id'=>$r->change_id);
            $this->gate($data);
          } else {
            echo $err;
          }
        }
        else if (trim($rowDisplay->type) == 'BELT') {
          $qtext = '
						SELECT a.*, da.file_logo FROM st_baggagebelt_data a
						LEFT JOIN data_airlines da on a.airlines = da.name
							WHERE a.`name`="'.$rowDisplay->type_name.'"
  						AND a.schedule_date = DATE_FORMAT(NOW(),"%Y-%m-%d")
  							AND
						(
									DATE_FORMAT(NOW(),"%H:%i") > CONVERT(a.start_time,TIME)
								AND
									DATE_FORMAT(NOW(),"%H:%i") < CONVERT(a.end_time,TIME)

							)
						ORDER BY
							CONVERT(a.start_time,TIME)
								ASC;';
          $qGetData = $this->db->query($qtext);
          if ($qGetData->num_rows() > 0) {
//                        $GetData = $qGetData->first_row();
//						$img = '/assets/uploads/airliness/' . $GetData->file_logo;
//						$data = array('err'=>'-','display'=>$GetData, 'display_uid'=>$uid, 'change_id'=>$r->change_id, 'img'=>$img);
            $data = array('err'=>'-','display'=>$qGetData->result_object(), 'display_uid'=>$uid, 'change_id'=>$r->change_id);
//						print_r($data);die();

            $this->belt($data);
          } else {
            echo $err;
          }
        }
        else if (trim($rowDisplay->type) == 'FIDS') {
          $qGetData = $this->db->query('
                    	SELECT
							a.*, b.file_logo as img
						FROM
							st_fids_data a
						LEFT JOIN data_airlines b on a.airlines=b.name
						WHERE `type`="'.$rowDisplay->type_name.'"
						  AND schedule_date = DATE_FORMAT(NOW(), "%Y-%m-%d")
						ORDER BY
							CONVERT(schedule_time, TIME)
								ASC;
                    ');

          if ($qGetData->num_rows() > 0) {

            $data = array('err'=>'-','display'=>$qGetData->result_object(), 'display_uid'=>$uid, 'change_id'=>$r->change_id);

            $this->fids($data);
          } else {
            echo $err;
          }
        }
        else if (trim($rowDisplay->type) == 'FIDS PORTRAIT') {
          $qGetData = $this->db->query('
                    	SELECT
							a.*, b.file_logo as img
						FROM
							st_fids_data a
						LEFT JOIN data_airlines b on a.airlines=b.name
						WHERE `type`="'.$rowDisplay->type_name.'"
						  AND schedule_date = DATE_FORMAT(NOW(), "%Y-%m-%d")
						ORDER BY
							CONVERT(schedule_time, TIME)
								ASC;
                    ');

          if ($qGetData->num_rows() > 0) {

            $data = array('err'=>'-','display'=>$qGetData->result_object(), 'display_uid'=>$uid, 'change_id'=>$r->change_id);
            $this->fidsPortrait($data);
          } else {
            echo $err;
          }
        }
        else if (trim($rowDisplay->type) == 'BANNER') {
          $qGetData = $this->db->query('  SELECT *
                                                    FROM st_banner_data
                                                    WHERE `name`="'.$rowDisplay->type_name.'"
                                                        AND schedule_date = DATE_FORMAT(NOW(),"%Y-%m-%d")
                                                        AND
                                                        (
                                                            DATE_FORMAT(NOW(),"%H:%i") > CONVERT(start_time,TIME)
                                                            AND
                                                            DATE_FORMAT(NOW(),"%H:%i") < CONVERT(end_time,TIME)

                                                        )

                                                    ORDER BY
                                                        CONVERT(start_time,TIME)
                                                    DESC;
                                                ');

          if ($qGetData->num_rows() > 0) {

            $data = array('err'=>'-','display'=>$qGetData->first_row(), 'display_uid'=>$uid, 'change_id'=>$r->change_id);

            $this->banner($data);
          } else {
            echo $err;
          }
        }
        else {
          echo $err;
        }
      } else {
        echo $err;
      }
    }
  }

  public function counter($data = NULL) {
    if ($data == NULL) {
      $GetData = $this->db->query('SELECT "FLIGHT NO" as flightno, "TUJUAN" as `to`,"STATUS" as status ')->first_row();

      $data = array('
                err'=>'-'
      ,'display'=>$GetData
      ,'img'=>'/assets/img/airline/garuda-w.png'
      );

    }

    $this->load->view('screens/counter',$data);
  }

  public function gate($data = NULL) {
    if ($data == NULL) {
      $GetData = $this->db->query('SELECT "GATE" as `name`, "FLIGHT NO" as flightno, "TUJUAN" as `to`,"STATUS" as status ')->first_row();

      $data = array('
                err'=>'-'
      ,'display'=>$GetData
      ,'img'=>'/assets/img/airline/garuda-w.png'
      );

    }

    $this->load->view('screens/gate', $data);
  }

  public function belt($data = NULL) {
    if ($data == NULL) {
      $GetData = $this->db->query('SELECT "BAGASI" as `name`, "FLIGHT NO" as flightno, "ASAL" as `from`,"STATUS" as status ')->first_row();

      $data = array('
                err'=>'-'
      ,'display'=>$GetData
      ,'img'=>'/assets/img/airline/garuda-w.png'
      );

    }
    $getBanner = $this->db->query('SELECT banner_location FROM st_banner_data WHERE name = "FIDS_BANNER"')->first_row();
    if (!$getBanner || empty($getBanner)) {
      $banner_location = 'portrait-banner.gif';
      $banner_loc = 'N';
    } else {
      $banner_location = $getBanner->banner_location;
      $banner_loc = 'Y';
    }
//		print_r($data);die();
    $this->load->view('screens/belt', $data+array(
        'banner' => array('path' => $banner_location, 'type' => pathinfo($banner_location)['extension'], 'loc' => $banner_loc)
      ));
  }

  public function fids($data = NULL) {
    if ($data == NULL) {
      $GetData = $this->db->query('SELECT "FIDS" as `type`
                                                , "AIRLINES" as `airlines`
                                                , "FLIGHT NO" as flightno
                                                , "KOTA" as `from_to`
                                                , "00:00" as `schedule_time`, "00:00" as `actual_time`
                                                , "STATUS" as `status`
                                                , "CATATAN" as `notes`
                                                , "/assets/img/airline/garuda-w.png" as `img` ')->result_object();


      $data = array('
                err'=>'-'
      ,'display'=>$GetData
      );

    }

    $getBanner = $this->db->query('SELECT banner_location FROM st_banner_data WHERE name = "FIDS_BANNER"')->first_row();

    if (!$getBanner || empty($getBanner)) {
      $banner_location = 'portrait-banner.gif';
      $banner_loc = 'N';
    } else {
      $banner_location = $getBanner->banner_location;
      $banner_loc = 'Y';
    }

    $this->load->view('screens/fids', $data+array(
        'banner' => array('path' => $banner_location, 'type' => pathinfo($banner_location)['extension'], 'loc' => $banner_loc)
      ));
  }

  public function fidsPortrait($data = NULL) {
    if ($data == NULL) {
      $GetData = $this->db->query('SELECT "FIDS" as `type`
                                                , "AIRLINES" as `airlines`
                                                , "FLIGHT NO" as flightno
                                                , "KOTA" as `from_to`
                                                , "00:00" as `schedule_time`, "00:00" as `actual_time`
                                                , "STATUS" as `status`
                                                , "CATATAN" as `notes`
                                                , "/assets/img/airline/garuda-w.png" as `img` ')->result_object();

      $data = array('
                err'=>'-'
      ,'display'=>$GetData
      );

    }
    $this->load->view('screens/fids-portrait', $data);
  }

  public function banner($data = NULL) {
    if ($data == NULL) {
      $GetData = $this->db->query('SELECT "NAME" as name, "START" as `start`, "END" as `end`, "BANNER" as banner  ')->first_row();

      $data = array('
                err'=>'-'
      ,'display'=>$GetData
      );

    }

    $this->load->view('screens/banner',$data);
  }


  private function showScreen($dataScreen, $uid, $change_id) {
    $data = $dataScreen(0);
    $data['change_id'] = $change_id;
    $data['display_uid'] = $uid;
    $data['widget_1'] = $this->load->view('widgets/'.strtolower($dataScreen(0)['widget_1_type']), NULL, TRUE);
    $data['widget_2'] = $this->load->view('widgets/'.strtolower($dataScreen(0)['widget_2_type']), NULL, TRUE);

    $this->load->view('screens/'.$dataScreen(0)['screen_layout'], $data);
  }

}
